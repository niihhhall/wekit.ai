import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';
import { toastService, Toast as ToastType } from '../services/toastService';

const Toast: React.FC<{ toast: ToastType; onClose: () => void }> = ({ toast, onClose }) => {
    const icons = {
        success: CheckCircle,
        error: XCircle,
        warning: AlertTriangle,
        info: Info,
    };

    const colors = {
        success: 'bg-green-50 border-green-200 text-green-800',
        error: 'bg-red-50 border-red-200 text-red-800',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
        info: 'bg-blue-50 border-blue-200 text-blue-800',
    };

    const iconColors = {
        success: 'text-green-600',
        error: 'text-red-600',
        warning: 'text-yellow-600',
        info: 'text-blue-600',
    };

    const Icon = icons[toast.type];

    return (
        <div className={`flex items-start gap-3 p-4 rounded-lg border shadow-lg ${colors[toast.type]} animate-slideInRight`}>
            <Icon className={`w-5 h-5 mt-0.5 ${iconColors[toast.type]}`} />
            <p className="flex-1 text-sm font-medium">{toast.message}</p>
            <button
                onClick={onClose}
                className="text-neutral-400 hover:text-neutral-600 transition-colors"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export const ToastContainer: React.FC = () => {
    const [toasts, setToasts] = useState<ToastType[]>([]);

    useEffect(() => {
        const unsubscribe = toastService.subscribe(setToasts);
        return unsubscribe;
    }, []);

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 max-w-md">
            {toasts.map(toast => (
                <Toast
                    key={toast.id}
                    toast={toast}
                    onClose={() => toastService.remove(toast.id)}
                />
            ))}
        </div>
    );
};
