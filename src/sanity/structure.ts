import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("LH DYY Law Firm")
    .items([
      S.documentTypeListItem("article").title("Articles"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("member").title("Members"),
      S.documentTypeListItem("testimonial").title("Testimonial"),
      S.documentTypeListItem("services").title("Services"),
      S.documentTypeListItem("value").title("Company Values"),
      S.documentTypeListItem("companyContact").title("Company Contact"),
      S.documentTypeListItem("founderProfile").title("Founder Profile"),
      S.documentTypeListItem("companyProfile").title("Company Profile"),
      S.documentTypeListItem("companyAddress").title("Company Address"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "article",
            "category",
            "member",
            "testimonial",
            "services",
            "value",
            "companyContact",
            "founderProfile",
            "companyProfile",
            "companyAddress"
          ].includes(item.getId()!)
      ),
    ]);
