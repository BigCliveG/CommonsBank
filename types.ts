import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectionData {
  year: string;
  revenue: number;
  users: number;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}