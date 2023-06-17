import { Session } from "next-auth";
import { TeamRole } from "@prisma/client";
import { Company } from "../controllers/company";

type Access = {
    [key: string]: {
        activeCompanyOnly: boolean;
        roles: TeamRole[];
    };
};

const allRoles: TeamRole[] = ["ADMIN", "STAFF"];

export const access: Access = {
    "/dashboard": { activeCompanyOnly: true, roles: allRoles },
    "/dashboard/products": { activeCompanyOnly: true, roles: allRoles },
    "/dashboard/orders": { activeCompanyOnly: true, roles: allRoles },
    "/dashboard/teams": { activeCompanyOnly: true, roles: ["ADMIN"] },
    "/dashboard/companies": { activeCompanyOnly: false, roles: ["ADMIN"] },
    "/dashboard/companies/create": {
        activeCompanyOnly: false,
        roles: ["ADMIN"],
    },
    "/dashboard/profile": { activeCompanyOnly: false, roles: allRoles },
};

export enum AccessType {
    "NONE",
    "PARTIAL",
    "FULL",
}

export function userHasAccess(
    route: string,
    user?: Session["user"],
    company?: Company | null
): AccessType {
    if (!user) return AccessType.NONE;

    const routeAccess = access[route];
    if (!company && !routeAccess?.activeCompanyOnly) return AccessType.FULL;

    if (!company) return AccessType.PARTIAL;

    const isCompanyAllowed = !company.active && routeAccess.activeCompanyOnly;
    const userRole = company.Team.find((val) => val.userId === user.id)?.role;
    const isRoleAllowed = routeAccess.roles.includes(userRole!);

    if (!isRoleAllowed) return AccessType.NONE;

    return isCompanyAllowed ? AccessType.PARTIAL : AccessType.FULL;
}

export function getBlurClass(originalClass: string, accessType: AccessType) {
    return originalClass + (accessType !== AccessType.FULL ? " blur-sm" : "");
}
