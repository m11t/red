import { FhirSearchFn, FhirResourceType } from "@red-probeaufgabe/types";

/**
 * Items for Dropdown to choose FhirSearchFn
 *
 * @export
 * @interface Filter
 */
export interface Filter {
    value: FhirSearchFn,
    label: FhirResourceType | 'Patient & Practitioner'
}

/**
 * Criteria to search by
 *
 * @export
 * @interface SearchCriteria
 */
export interface SearchCriteria {
    search: string;
    searchFn: FhirSearchFn
}
  