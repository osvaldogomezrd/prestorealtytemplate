"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { MapPin } from "lucide-react";

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onPlaceSelect?: (place: google.maps.places.PlaceResult) => void;
  placeholder?: string;
  className?: string;
  id?: string;
  required?: boolean;
  showIcon?: boolean;
}

export default function AddressAutocomplete({
  value,
  onChange,
  onPlaceSelect,
  placeholder = "Enter your property address...",
  className = "",
  id,
  required = false,
  showIcon = false,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const blurTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [suggestions, setSuggestions] = useState<
    Array<{ display_name: string; place_id: number }>
  >([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isGoogleReady, setIsGoogleReady] = useState(false);

  const initAutocomplete = useCallback(() => {
    if (!inputRef.current) return false;
    if (!window.google?.maps?.places?.Autocomplete) return false;
    if (autocompleteRef.current) return true; // already initialized

    autocompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["address"],
        componentRestrictions: { country: "us" },
        fields: ["formatted_address", "geometry", "address_components"],
      }
    );

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current!.getPlace();
      if (place.formatted_address) {
        onChange(place.formatted_address);
        onPlaceSelect?.(place);
        setShowSuggestions(false);
      }
    });

    setIsGoogleReady(true);
    return true;
  }, [onChange, onPlaceSelect]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (initAutocomplete()) clearInterval(interval);
    }, 200);

    return () => {
      clearInterval(interval);
      // Clean up autocomplete listeners to avoid memory leaks
      if (autocompleteRef.current) {
        window.google?.maps?.event?.clearInstanceListeners(
          autocompleteRef.current
        );
      }
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, [initAutocomplete]);

  useEffect(() => {
    if (isGoogleReady || value.trim().length < 3) {
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(async () => {
      try {
        const params = new URLSearchParams({
          q: value.trim(),
          format: "jsonv2",
          addressdetails: "1",
          countrycodes: "us",
          limit: "5",
        });

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?${params.toString()}`,
          {
            signal: controller.signal,
            headers: {
              "Accept-Language": "en-US,en",
            },
          }
        );

        if (!response.ok) {
          setSuggestions([]);
          return;
        }

        const results = (await response.json()) as Array<{
          display_name: string;
          place_id: number;
        }>;

        setSuggestions(results);
        setShowSuggestions(true);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setSuggestions([]);
        }
      }
    }, 250);

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [isGoogleReady, value]);

  const hasFallbackSuggestions = !isGoogleReady && showSuggestions && suggestions.length > 0;

  return (
    <div className="relative w-full">
      {showIcon && (
        <div className="pointer-events-none absolute inset-y-0 left-3 z-10 flex items-center">
          <MapPin
            size={16}
            className="text-gray-400"
          />
        </div>
      )}
      <input
        ref={inputRef}
        id={id}
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          if (!isGoogleReady) {
            if (e.target.value.trim().length < 3) {
              setSuggestions([]);
            }
            setShowSuggestions(true);
          }
        }}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        onFocus={() => {
          if (!isGoogleReady && suggestions.length > 0) {
            setShowSuggestions(true);
          }
        }}
        onBlur={() => {
          blurTimeoutRef.current = setTimeout(() => {
            setShowSuggestions(false);
          }, 120);
        }}
        className={`${className} ${showIcon ? "!pl-10" : ""} leading-normal`}
      />

      {hasFallbackSuggestions && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-[0_18px_40px_rgba(10,9,21,0.18)]">
          <ul className="max-h-80 overflow-y-auto py-2">
            {suggestions.map((suggestion) => (
              <li key={suggestion.place_id}>
                <button
                  type="button"
                  onMouseDown={(event) => {
                    event.preventDefault();
                    onChange(suggestion.display_name);
                    setShowSuggestions(false);
                  }}
                  className="block w-full px-4 py-3 text-left text-sm leading-6 text-[#0a0915] transition-colors duration-150 hover:bg-[#f7f6f4]"
                >
                  {suggestion.display_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
