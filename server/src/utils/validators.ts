export const validators = {
  isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isUsername(username: string): boolean {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,30}$/;
    return usernameRegex.test(username);
  },

  isPassword(password: string): boolean {
    return password.length >= 8;
  },

  isUUID(id: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
  },

  sanitizeInput(input: string): string {
    return input.trim().replace(/[<>]/g, '');
  },

  validateRequiredFields(obj: Record<string, any>, fields: string[]): string[] {
    const missingFields: string[] = [];

    fields.forEach(field => {
      if (!obj[field] || (typeof obj[field] === 'string' && !obj[field].trim())) {
        missingFields.push(field);
      }
    });

    return missingFields;
  },
};