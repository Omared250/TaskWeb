
export const getPriorityClassName = (priority) => {
    switch (priority) {
        case 'High':
            return 'high_priority__color';
        case 'Medium':
            return 'medium_priority__color';
        case 'Low':
            return 'low_priority__color';
        default:
            return ''; // Default class or no class if priority is not set
    }
}