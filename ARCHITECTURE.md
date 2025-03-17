# MarketPro Dashboard Architecture

This document outlines the architecture of the MarketPro Dashboard application, which follows Feature-Sliced Design (FSD) principles.

## Architecture Overview

The application is structured following the FSD methodology, which divides the codebase into layers based on their business significance:

```
src/
├── app/               # Application initialization
│   └── providers/     # Context providers
├── entities/          # Business models
├── features/          # Business features
├── pages/             # Page components
├── shared/            # Shared utilities
└── widgets/           # Complex UI blocks
```

## Layer Descriptions

### App Layer

Contains application initialization code and global providers:

- **providers/dashboard**: Dashboard state management
- **providers/loading**: Global loading state
- **providers/ui**: UI preferences (dark mode, etc.)

### Entities Layer

Contains business models and data structures:

- **dashboard**: Types for dashboard components
- **marketplace**: Types for marketplace connections
- **provider**: Types for product providers

### Features Layer

Contains business features that implement specific use cases:

- **widget-management**: Adding/removing widgets to dashboard

### Pages Layer

Contains page components that compose widgets and features:

- **Dashboard.tsx**: Main dashboard view
- **Marketplaces.tsx**: Marketplace management
- **Providers.tsx**: Provider management

### Shared Layer

Contains shared utilities and components:

- **api**: API methods for data fetching
  - **dashboard**: Dashboard-related API calls
  - **marketplace**: Marketplace-related API calls
  - **provider**: Provider-related API calls
- **lib**: Utility functions
  - **environment**: Environment variables
  - **icons**: Icon rendering utilities
- **ui**: UI components
  - **card**: Card component
  - **error-boundary**: Error handling components
  - **loading**: Loading indicators and skeletons

### Widgets Layer

Contains complex UI blocks that combine multiple components:

- **activity-feed**: Activity feed widget
- **metric-card**: Metric card widget
- **quick-actions**: Quick actions widget
- **traffic-analytics**: Traffic analytics chart
- **traffic-sources**: Traffic sources chart

## State Management

The application uses React Context for state management:

- **DashboardContext**: Manages dashboard state (widgets, metrics)
- **UIContext**: Manages UI preferences
- **LoadingContext**: Manages global loading state

## Error Handling

Error handling is implemented using:

- **ErrorBoundary**: Catches and displays rendering errors
- **useApiErrorHandler**: Hook for handling API errors
- **ErrorAlert**: Component for displaying error messages

## Loading States

Loading states are implemented using:

- **Spinner**: Simple loading spinner
- **Skeleton**: Content skeleton for loading states
- **WidgetSkeleton**: Skeleton for widgets
- **LoadingOverlay**: Overlay for full-screen loading

## Future Enhancements

Planned future enhancements include:

1. Proper routing with React Router
2. Enhanced type safety
3. Unit testing
4. Path alias resolution for cleaner imports