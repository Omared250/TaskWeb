export const validateForm = (title, description, dateTime, priority) => {
    // Validation checks here
    if (!title.trim()) {
        return { isValid: false, message: "Title cannot be empty. 🥲" };
    }
    if (!description.trim()) {
        return { isValid: false, message: "Description cannot be empty. 🥲" };
    }
    if (!dateTime) {
        return { isValid: false, message: "Date and Time cannot be empty. 📅" };
    }
    if (!priority) {
        return { isValid: false, message: "Priority must be selected. 🧐" };
    }

    // Create date objects for comparison
    const selectedDate = new Date(dateTime);
    const currentDate = new Date();

    // Remove the time part from the current and selected date
    currentDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    // Check if the input date is earlier than today
    if (selectedDate <= currentDate) {
        return { isValid: false, message: "Date cannot be in the past. ⏰" };
    }

    // If all validations pass
    return { isValid: true, message: "" };
}