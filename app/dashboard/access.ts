import { Session } from "next-auth";
import { Company } from "../api/companies/route";
import { TeamRole } from "@prisma/client";

type Access = {
    [key: string]: {
        activeCompanyOnly: boolean;
        roles: Array<TeamRole>;
    };
};

export const access: Access = {
    "/dashboard": {
        activeCompanyOnly: true,
        roles: ["ADMIN", "STAFF"],
    },
    "/dashboard/products": {
        activeCompanyOnly: true,
        roles: ["ADMIN", "STAFF"],
    },
    "/dashboard/orders": {
        activeCompanyOnly: true,
        roles: ["ADMIN", "STAFF"],
    },
    "/dashboard/teams": {
        activeCompanyOnly: true,
        roles: ["ADMIN"],
    },
    "/dashboard/companies": {
        activeCompanyOnly: false,
        roles: ["ADMIN"],
    },
    "/dashboard/companies/create": {
        activeCompanyOnly: false,
        roles: ["ADMIN"],
    },
    "/dashboard/profile": {
        activeCompanyOnly: false,
        roles: ["ADMIN", "STAFF"],
    },
};

enum AccessType {
    "NONE",
    "PARTIAL",
    "FULL",
}

export function userHasAccess(
    route: string,
    user?: Session["user"],
    company?: Company | null
): AccessType {
    if (!user || !company) {
        return AccessType.NONE;
    }

    const isCompanyAllowed = access[route]?.activeCompanyOnly && company.active;
    const isRoleAllowed = access[route]?.roles.includes(
        company.Team.find((val) => val.userId === user.id)?.role!
    );

    if (isRoleAllowed === false) {
        return AccessType.NONE;
    } else if (isRoleAllowed === true && isCompanyAllowed === false) {
        return AccessType.PARTIAL;
    } else if (isRoleAllowed === true && isCompanyAllowed === true) {
        return AccessType.FULL;
    } else {
        return AccessType.NONE;
    }
}

export function getBlurClass(originalClass: string, accessType: AccessType) {
    return (
        originalClass +
        (accessType === AccessType.PARTIAL || accessType === AccessType.NONE
            ? " blur-sm"
            : "")
    );
}
