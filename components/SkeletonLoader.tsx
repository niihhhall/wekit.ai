import React from 'react';

interface SkeletonLoaderProps {
    variant?: 'text' | 'circular' | 'rectangular';
    width?: string;
    height?: string;
    className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
    variant = 'rectangular',
    width = '100%',
    height = '20px',
    className = ''
}) => {
    const variantClasses = {
        text: 'rounded',
        circular: 'rounded-full',
        rectangular: 'rounded-lg'
    };

    return (
        <div
            className={`skeleton ${variantClasses[variant]} ${className}`}
            style={{ width, height }}
        />
    );
};

// Preset skeleton patterns
export const SkeletonCard: React.FC = () => (
    <div className="bg-white p-6 rounded-xl border border-neutral-200 space-y-4">
        <SkeletonLoader variant="circular" width="48px" height="48px" />
        <SkeletonLoader variant="text" width="70%" height="24px" />
        <SkeletonLoader variant="text" width="100%" height="16px" />
        <SkeletonLoader variant="text" width="90%" height="16px" />
    </div>
);

export const SkeletonList: React.FC<{ count?: number }> = ({ count = 3 }) => (
    <div className="space-y-3">
        {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
                <SkeletonLoader variant="circular" width="40px" height="40px" />
                <div className="flex-1 space-y-2">
                    <SkeletonLoader variant="text" width="40%" height="16px" />
                    <SkeletonLoader variant="text" width="60%" height="14px" />
                </div>
            </div>
        ))}
    </div>
);
