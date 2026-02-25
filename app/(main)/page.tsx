import { HeroSection, FeatureSection } from '@/features/home/components/index'
export default function MainPage() {
    return (
        <div className='max-w-6xl mx-auto py-8'>
            <HeroSection />
            <FeatureSection />
        </div>
    )
}