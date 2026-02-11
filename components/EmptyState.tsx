import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    icon: Icon,
    title,
    description,
    action
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-neutral-400" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">{title}</h3>
            {description && (
                <p className="text-sm text-neutral-500 max-w-sm mb-6">{description}</p>
            )}
            {action && (
                <button
                    onClick={action.onClick}
                    className="btn-base bg-black text-white hover:bg-neutral-800"
                >
                    {action.label}
                </button>
            )}
        </div>
    );
};
