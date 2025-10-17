# Extended Reality Hero Section - Setup Guide

## ✅ Updated Design

The Extended Reality training page hero section has been updated to use a **full background image** design matching your reference images.

## 🖼️ Background Image Setup

### Required Image:
- **Filename**: `xr-controllers-bg.jpg`
- **Location**: `e:\Projects\RoundTable-Leaning\public\`
- **Content**: VR controller/headset image with teal background
- **Recommended Size**: 1920x1080px or larger
- **Format**: JPG or PNG

### How to Add the Image:

1. Save your VR controller image (the one with the teal background)
2. Rename it to: `xr-controllers-bg.jpg`
3. Place it in: `e:\Projects\RoundTable-Leaning\public\xr-controllers-bg.jpg`

The code will automatically use it!

## 🎨 Design Features

### Layout:
- ✅ Full-width background image (VR controllers)
- ✅ Teal gradient overlay for text readability
- ✅ Rounded container with backdrop blur effect
- ✅ Left-aligned content (text on left side)
- ✅ Image visible on the right (background)

### Visual Elements:
- **Background**: VR controller image with teal gradient overlay
- **Container**: Rounded corners (40px) with semi-transparent background
- **Typography**: White text, clean and readable
- **Buttons**: 
  - Primary: Bright teal (#09a6e4)
  - Secondary: White outline with hover effects

### Responsive Behavior:
- **Desktop**: Full background image visible, content on left
- **Tablet**: Adjusted padding and font sizes
- **Mobile**: Centered background, stacked content

## 🎯 Key CSS Features

```css
/* Background image with overlay */
.xr-hero-background {
  position: absolute;
  full coverage with gradient overlay
}

/* Semi-transparent container */
.xr-hero-inner {
  backdrop-filter: blur(10px);
  background: rgba(13, 106, 141, 0.75);
}
```

## 📱 Responsive Breakpoints

- **1200px**: Reduced padding, adjusted text sizes
- **968px**: More compact layout
- **767px**: Mobile-optimized spacing
- **480px**: Small mobile adjustments

## 🚀 Testing

Visit: `http://localhost:5174/extended-reality-training`

The hero section should display:
1. Teal background (even without image)
2. White text content on the left
3. Two action buttons
4. Smooth hover effects

## 📝 Fallback Behavior

If the image doesn't load:
- Solid teal gradient background displays
- All text remains readable
- Design stays intact

## 🔧 Customization

### Change Background Image:
Update in `ExtendedRealityPage.jsx`:
```jsx
<img 
  src="/your-image-name.jpg" 
  alt="VR Controllers Background" 
  className="xr-bg-image"
/>
```

### Adjust Overlay Opacity:
In `App.css`, modify:
```css
.xr-bg-overlay {
  background: linear-gradient(..., rgba(13, 106, 141, 0.85) ...);
  /* Change 0.85 to adjust transparency */
}
```

### Change Button Colors:
```css
.xr-button-primary {
  background-color: #09a6e4; /* Your brand color */
}
```

## ✨ Final Result

The hero section now perfectly matches the reference design with:
- Professional VR controller background
- Clean, readable content presentation
- Modern glassmorphism effects
- Smooth animations and transitions
- Fully responsive across all devices

Enjoy your beautiful XR training page! 🎉
