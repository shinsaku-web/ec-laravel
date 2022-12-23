export const USER_TYPES = {
    user: "user",
    owner: "owner",
    admin: "admin",
} as const;

export type USER_TYPE = typeof USER_TYPES[keyof typeof USER_TYPES];
