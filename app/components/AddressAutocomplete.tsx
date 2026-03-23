"use client";

import { useEffect, useRef, useCallback } from "react";
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
      }
    });

    return true;
  }, [onChange, onPlaceSelect]);

  useEffect(() => {
    // Try immediately (if Maps script was already loaded)
    if (initAutocomplete()) return;

    // Otherwise poll every 200ms until the API is ready
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
    };
  }, [initAutocomplete]);

  return (
    <div className="relative w-full">
      {showIcon && (
        <MapPin
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
        />
      )}
      <input
        ref={inputRef}
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        className={`${showIcon ? "pl-9" : ""} ${className}`}
      />
    </div>
  );
}
