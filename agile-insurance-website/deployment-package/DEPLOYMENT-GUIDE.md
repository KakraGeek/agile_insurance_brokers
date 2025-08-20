# 🚀 Agile Insurance Brokers - cPanel Deployment Guide

## 📋 **Pre-Deployment Checklist**
- [ ] All hero slider images are working
- [ ] All parallax effects are functioning
- [ ] All pages are accessible
- [ ] All animations are smooth
- [ ] Mobile responsiveness is working

## 🎯 **Deployment Method: cPanel File Manager**

### **Step 1: Access cPanel**
1. Login to your hosting provider's cPanel
2. Navigate to **File Manager**
3. Go to your **public_html** directory (or your domain's root directory)

### **Step 2: Backup Existing Site (IMPORTANT!)**
1. **Rename** your current `public_html` folder to `public_html_backup`
2. Create a new `public_html` folder
3. This ensures you can quickly restore if needed

### **Step 3: Upload New Files**
1. **Upload ALL files** from the `deployment-package` folder to your `public_html` directory
2. **Maintain the exact folder structure** - don't change any folder names
3. **Upload in this order:**
   - First: All HTML files (index.html, 404.html, etc.)
   - Second: All folders (_next, Images, about, contact, clients)
   - Third: Configuration files (robots.txt, sitemap.xml, favicon.ico)

### **Step 4: Set Permissions**
1. **HTML files:** 644
2. **CSS/JS files:** 644
3. **Image files:** 644
4. **Folders:** 755

### **Step 5: Test Your Site**
1. Visit your domain to ensure the homepage loads
2. Test all navigation links
3. Verify hero slider images are displaying
4. Check parallax effects on all pages
5. Test mobile responsiveness

## ⚠️ **Important Notes**

### **File Structure Must Be Preserved:**
```
public_html/
├── index.html
├── 404.html
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── _next/          ← Don't rename this!
├── Images/         ← Don't rename this!
├── about/
├── contact/
└── clients/
```

### **Common Issues & Solutions:**

#### **1. Hero Slider Images Not Loading:**
- Ensure `Images/hero-slider-images/` folder exists
- Check file permissions (644 for images)
- Verify image paths in browser console

#### **2. CSS/JS Not Loading:**
- Ensure `_next/` folder is uploaded completely
- Check file permissions (644 for CSS/JS files)
- Clear browser cache

#### **3. 404 Errors:**
- Ensure all HTML files are in the correct locations
- Check that folder names match exactly
- Verify `.htaccess` file if using custom routing

#### **4. Parallax Effects Not Working:**
- Ensure all banner images are uploaded to `Images/Parallax/New/`
- Check that CSS animations are loading
- Verify JavaScript files are accessible

## 🔧 **Troubleshooting**

### **If Images Don't Load:**
1. Check browser console for 404 errors
2. Verify file paths are correct
3. Ensure image files are actually uploaded
4. Check file permissions

### **If Animations Don't Work:**
1. Check if `_next/static/chunks/` folder exists
2. Verify JavaScript files are loading
3. Check browser console for errors
4. Ensure all dependencies are uploaded

### **If Pages Show 404:**
1. Verify HTML files are in correct locations
2. Check folder structure matches exactly
3. Ensure no typos in folder names
4. Check file permissions

## 📱 **Mobile Testing**
- Test on various screen sizes
- Verify touch interactions work
- Check that parallax effects are smooth on mobile
- Ensure navigation is mobile-friendly

## 🎨 **Performance Optimization**
- Images are already optimized (WebP format)
- CSS and JS are minified
- Static export ensures fast loading
- No server-side processing required

## 📞 **Support**
If you encounter issues:
1. Check browser console for errors
2. Verify file structure matches exactly
3. Check file permissions
4. Clear browser cache
5. Test in incognito/private mode

## ✅ **Post-Deployment Checklist**
- [ ] Homepage loads correctly
- [ ] Hero slider images display
- [ ] All navigation links work
- [ ] Parallax effects are smooth
- [ ] Mobile responsiveness works
- [ ] All pages are accessible
- [ ] Performance is acceptable
- [ ] SEO elements are working (robots.txt, sitemap.xml)

---

**🎉 Congratulations! Your Agile Insurance Brokers website is now live on shared hosting!**
