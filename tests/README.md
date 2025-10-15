# Portfolio Playwright Test Suite

This directory contains comprehensive Playwright tests for the portfolio website. The test suite covers functionality, accessibility, performance, and responsive design.

## Test Files

### `basic.spec.js`
- Page load and navigation tests
- Meta tag validation
- Social media link functionality
- Contact information display
- Basic page structure validation

### `components.spec.js`
- Hero section display and content
- About section content
- Technologies section
- Experience timeline
- Projects portfolio
- QA Projects showcase
- Contact section
- Project link functionality

### `animations.spec.js`
- Page load animations
- Hover effects on interactive elements
- Smooth scrolling behavior
- Rapid scrolling handling
- Window resize handling
- Keyboard navigation
- Click interactions

### `responsive.spec.js`
- Desktop (1920x1080) display
- Laptop (1024x768) display
- Tablet (768x1024) display
- Mobile (375x667) display
- Small mobile (320x568) display
- Navigation across screen sizes
- Project cards layout
- QA projects layout
- Orientation changes
- Horizontal scroll prevention

### `accessibility.spec.js`
- Heading hierarchy validation
- Image alt text
- Link attributes and text
- Keyboard navigation
- Color contrast
- Form labels
- Semantic HTML structure
- Screen reader navigation
- Focus management
- ARIA attributes
- Document structure
- Reduced motion preferences

### `performance.spec.js`
- Page load time validation
- Image optimization
- Concurrent request handling
- Caching headers
- JavaScript error handling
- DOM structure efficiency
- Slow network conditions
- Resource loading order
- Memory usage
- Lazy loading
- Memory leak prevention
- Error handling

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests with UI
```bash
npm run test:ui
```

### Run Tests in Headed Mode
```bash
npm run test:headed
```

### Debug Tests
```bash
npm run test:debug
```

### View Test Report
```bash
npm run test:report
```

### Run Specific Test Files
```bash
npx playwright test basic.spec.js
npx playwright test components.spec.js
npx playwright test animations.spec.js
npx playwright test responsive.spec.js
npx playwright test accessibility.spec.js
npx playwright test performance.spec.js
```

### Run Tests on Specific Browsers
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
npx playwright test --project="Mobile Chrome"
npx playwright test --project="Mobile Safari"
```

## Test Configuration

The tests are configured in `playwright.config.js` with the following features:

- **Base URL**: `http://localhost:5173` (Vite dev server)
- **Auto-start dev server**: Tests automatically start the dev server
- **Multiple browsers**: Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari
- **Screenshots**: On failure
- **Videos**: On failure
- **Traces**: On first retry
- **Parallel execution**: Tests run in parallel for faster execution

## Test Coverage

The test suite covers:

1. **Functionality**: All interactive elements, links, and navigation
2. **Responsive Design**: Multiple viewport sizes and orientations
3. **Accessibility**: WCAG compliance, keyboard navigation, screen readers
4. **Performance**: Load times, memory usage, error handling
5. **Animations**: Smooth transitions, hover effects, scroll behavior
6. **Cross-browser**: Chrome, Firefox, Safari, and mobile browsers

## Continuous Integration

These tests are designed to run in CI/CD pipelines and will:

- Start the dev server automatically
- Run on multiple browsers
- Generate reports and screenshots on failure
- Retry failed tests
- Run in parallel for efficiency

## Debugging

If tests fail:

1. Check the test report: `npm run test:report`
2. Run tests in headed mode: `npm run test:headed`
3. Use debug mode: `npm run test:debug`
4. Check screenshots and videos in the `test-results` directory
5. Review traces for detailed execution information

## Adding New Tests

When adding new features to the portfolio:

1. Add corresponding tests to the appropriate spec file
2. Update this README if new test categories are added
3. Ensure tests follow the existing patterns
4. Test across all configured browsers and viewports
5. Include accessibility and performance considerations
