import { create } from "zustand";
import { Companies, Company } from "../api/companies/route";

export const useCompanyStore = create<{
    currentCompany: Company | null;
    setDefaultCompany: (companies: Companies) => void;
    changeCompany: (company: Company) => void;
}>((set) => ({
    currentCompany: null,
    setDefaultCompany: (companies) =>
        set((state) => {
            if (companies && companies.length !== 0) {
                return { currentCompany: companies[0] };
            }
            return { currentCompany: null };
        }),
    changeCompany: (company) =>
        set((state) => {
            return { currentCompany: company };
        }),
}));
