import React, { createContext, useContext, useState } from 'react';
import { cn } from "../lib/utils";

const TabsContext = createContext();

export function Tabs({ value, onValueChange, children, className = '' }) {
  const [activeTab, setActiveTab] = useState(value || '');

  const handleTabChange = (tabValue) => {
    setActiveTab(tabValue);
    if (onValueChange) {
      onValueChange(tabValue);
    }
  };

  return (
    <TabsContext.Provider value={{ activeTab, onValueChange: handleTabChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = '' }) {
  return (
    <div className={`flex space-x-1 p-1 bg-gray-100 rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className = '' }) {
  const { activeTab, onValueChange } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => onValueChange(value)}
      className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
        isActive
          ? 'bg-white text-brand-blue-700 shadow-sm'
          : 'text-gray-600 hover:text-gray-900'
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className = '' }) {
  const { activeTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div className={`mt-6 ${className}`}>
      {children}
    </div>
  );
}
