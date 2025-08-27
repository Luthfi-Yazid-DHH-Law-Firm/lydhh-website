'use client'

import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import { googleMapsInput } from "@sanity/google-maps-input";

import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

// Default fallback location (Jakarta)
const defaultLocation = { lat: -6.2088, lng: 106.8456 };

// Try to get user's current location
if (typeof window !== 'undefined' && navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // Update the location object directly
      defaultLocation.lat = position.coords.latitude;
      defaultLocation.lng = position.coords.longitude;
      console.log('User location detected:', defaultLocation);
    },
    (error) => {
      console.warn('Could not get user location, using fallback:', error.message);
    },
    { 
      timeout: 5000, 
      enableHighAccuracy: false,
      maximumAge: 300000
    }
  );
}

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
    googleMapsInput({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API!,
      defaultZoom: 15,
      defaultLocation
    })
  ],
});