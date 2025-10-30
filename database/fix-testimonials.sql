-- Fix testimonials table - ensure it exists with all columns
-- Drop table if it exists (to start fresh)
DROP TABLE IF EXISTS testimonials CASCADE;
DROP VIEW IF EXISTS active_testimonials;

-- Create testimonials table with all required columns
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  client_name VARCHAR(100) NOT NULL,
  client_company VARCHAR(100) NOT NULL,
  client_title VARCHAR(100),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  content TEXT NOT NULL,
  project_type VARCHAR(50),
  featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT true
);

-- Create indexes for performance
CREATE INDEX idx_testimonials_featured ON testimonials(featured);
CREATE INDEX idx_testimonials_active ON testimonials(is_active);
CREATE INDEX idx_testimonials_display_order ON testimonials(display_order);

-- Create or replace function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_testimonials_updated_at 
    BEFORE UPDATE ON testimonials 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample testimonials data
INSERT INTO testimonials (
    client_name, client_company, client_title, rating, content, project_type, featured, display_order
) VALUES 
(
    'John Smith', 
    'TechStart Inc', 
    'CEO', 
    5, 
    'creatorit delivered our SaaS platform on time and within budget. Their expertise in React and Node.js was evident throughout the project. The team was professional, communicative, and delivered exactly what we needed.',
    'SaaS Platform',
    true,
    1
),
(
    'Sarah Johnson', 
    'E-commerce Plus', 
    'CTO', 
    5, 
    'The team''s attention to performance and user experience resulted in a 40% increase in our conversion rates. Their technical skills and project management approach exceeded our expectations.',
    'E-commerce Website',
    true,
    2
),
(
    'Mike Wilson', 
    'Local Business', 
    'Founder', 
    5, 
    'Professional, communicative, and delivered exactly what we needed. Highly recommend for any web development project. They made the complex simple and delivered on time.',
    'Business Website',
    false,
    3
),
(
    'Lisa Chen', 
    'Corp Solutions', 
    'Project Manager', 
    5, 
    'Excellent project management and technical delivery. They made the complex simple and were always available for questions. The final product exceeded our expectations.',
    'Corporate Website',
    true,
    4
),
(
    'David Brown', 
    'Growth Co', 
    'Marketing Director', 
    5, 
    'Our new website performs incredibly well. SEO improvements led to 60% more organic traffic within the first month. The team really knows their stuff.',
    'Marketing Website',
    false,
    5
),
(
    'Emma Davis', 
    'Service Hub', 
    'Operations Manager', 
    4, 
    'Reliable support and maintenance. They''re true partners in our digital success. Always responsive and helpful with updates and improvements.',
    'Service Website',
    false,
    6
);

-- Create a view for active testimonials
CREATE VIEW active_testimonials AS
SELECT 
    id,
    client_name,
    client_company,
    client_title,
    rating,
    content,
    project_type,
    featured,
    display_order,
    created_at
FROM testimonials
WHERE is_active = true
ORDER BY featured DESC, display_order ASC, created_at DESC;