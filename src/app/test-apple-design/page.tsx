// src/app/test-apple-design/page.tsx
import { DisplayText, HeadlineText, BodyText } from '@/components/ui/Typography';
import { FeatureCard } from '@/components/ui/AppleCard';
import { AppleButton, ButtonGroup } from '@/components/ui/AppleButton';

export default function TestAppleDesign() {
  return (
    <div className="container-apple section-apple">
      <DisplayText className="mb-4">Apple Design System Test</DisplayText>
      <HeadlineText className="mb-6">All Components Working!</HeadlineText>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <FeatureCard
          icon="🎨"
          title="Beautiful Design"
          description="Apple-inspired aesthetics"
        />
        <FeatureCard
          icon="⚡"
          title="Fast Performance"
          description="Optimized for speed"
        />
      </div>
      
      <ButtonGroup className="mb-8">
        <AppleButton variant="primary">Primary Button</AppleButton>
        <AppleButton variant="outline">Outline Button</AppleButton>
      </ButtonGroup>
      
      <BodyText>If you can see this styled correctly, the Apple Design System is working! 🎉</BodyText>
    </div>
  );
}