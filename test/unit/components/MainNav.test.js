import { render, screen } from "@testing-library/vue"

import MainNav from "@/components/MainNav.vue"
import { describe, it } from "vitest"

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav)
    const companyName = screen.queryByText("Cone Careers")
    expect(companyName).toBeInTheDocument()
  })

  it("displays menu items for navigation", () => {
    render(MainNav)
    const navigationMenuItems = screen.getAllByRole("listitem")
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Cone Corp",
      "How we hire",
      "Students",
      "Jobs"
    ])
  })
})
