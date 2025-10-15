# Projects Section Refactor

## Overview
The Projects section has been completely refactored with a modern tab-based layout and side drawer functionality. This replaces the previous separate `Projects.jsx` and `QAProjects.jsx` components.

## New Features

### 1. Tab-Based Navigation
- **Frontend Projects Tab**: Shows all frontend development projects
- **QA Projects Tab**: Shows all quality assurance projects
- Active tab highlighted with teal accent color
- Smooth transitions between tabs

### 2. Project Cards
- Responsive grid layout (1-4 columns based on screen size)
- Hover effects with scale and glow
- Project image with overlay on hover
- Truncated description (2 lines max)
- Click to open detailed drawer

### 3. Side Drawer
- Slides in from the right
- Backdrop blur effect
- Close button (X) in top-right
- Contains:
  - Project title and subtitle
  - Large project image
  - Detailed "About" section
  - Technology badges
  - "Open Project" link

### 4. Data Structure
All project data is now centralized in `/src/data/projectsData.js` with the following structure:

```javascript
{
  id: number,
  title: string,
  category: "Frontend" | "QA",
  description: string,
  about: string,
  technologies: string[],
  image: string,
  website: string
}
```

## Files Changed

### New Files
- `src/data/projectsData.js` - Centralized project data
- `src/components/ProjectsNew.jsx` - New tabbed projects component
- `PROJECTS_REFACTOR.md` - This documentation

### Modified Files
- `src/App.jsx` - Updated to use new component
- `tailwind.config.js` - Added line-clamp plugin
- `package.json` - Added lucide-react dependency

### Removed Files
- `src/components/Projects.jsx` - Replaced by ProjectsNew
- `src/components/QAProjects.jsx` - Replaced by ProjectsNew

## Dependencies Added
- `lucide-react` - For the close (X) icon
- `@tailwindcss/line-clamp` - For text truncation

## Usage

The component is now integrated into the main App.jsx and will automatically display all projects with the new tabbed interface. Users can:

1. Switch between Frontend and QA project tabs
2. Click any project card to view details in the side drawer
3. Click "Open Project" to visit the live project
4. Close the drawer by clicking the X or clicking outside

## Styling
- Maintains existing color palette and typography
- Uses teal accent color for active states
- Responsive design works on all screen sizes
- Smooth animations using Framer Motion
- Consistent with existing design system

## Future Enhancements
- Add search/filter functionality
- Add project categories beyond Frontend/QA
- Add project status indicators (Live, In Progress, etc.)
- Add GitHub links where applicable
- Add project screenshots gallery
