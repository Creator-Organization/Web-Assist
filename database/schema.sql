-- WebAssist Database Schema
-- Create database: webassist_db

-- Enable UUID extension for future use
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create contacts table
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(100),
  project_type VARCHAR(50) NOT NULL,
  preferred_stack VARCHAR(100),
  budget_range VARCHAR(50) NOT NULL,
  project_description TEXT NOT NULL,
  timeline VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed', 'cancelled'))
);

-- Create indexes for better query performance
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_project_type ON contacts(project_type);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contacts_updated_at 
    BEFORE UPDATE ON contacts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for recent contacts (last 30 days)
CREATE OR REPLACE VIEW recent_contacts AS
SELECT 
    id,
    name,
    email,
    company,
    project_type,
    budget_range,
    status,
    created_at
FROM contacts
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
ORDER BY created_at DESC;

-- Optional: Insert some sample data for testing
-- INSERT INTO contacts (
--     name, email, phone, company, project_type, preferred_stack, 
--     budget_range, project_description, timeline
-- ) VALUES 
-- (
--     'John Doe', 
--     'john@example.com', 
--     '+1 (555) 123-4567', 
--     'Acme Corp', 
--     'E-commerce Website', 
--     'React/Next.js', 
--     '$15,000 - $50,000', 
--     'We need a modern e-commerce platform with payment integration and inventory management.',
--     '2-3 months'
-- ),
-- (
--     'Jane Smith', 
--     'jane@startup.com', 
--     '+1 (555) 987-6543', 
--     'TechStart Inc', 
--     'Web Application', 
--     'Vue.js/Nuxt.js', 
--     '$50,000 - $100,000', 
--     'Building a SaaS platform for project management with real-time collaboration features.',
--     '3-6 months'
-- );

-- Grant permissions (adjust as needed for your setup)
-- GRANT ALL PRIVILEGES ON TABLE contacts TO webassist_user;
-- GRANT USAGE, SELECT ON SEQUENCE contacts_id_seq TO webassist_user;