import { render, screen } from "@testing-library/vue"

import TheSubnav from "@/components/Navigation/TheSubnav.vue"
import { describe } from "vitest"

describe("TheSubnav", () => {
  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: true
          }
        }
      })

      const jobCount = screen.getByText("1635")

      expect(jobCount).toBeInTheDocument()
    })
  })
  describe("when user is not on jobs page", () => {
    it("does not display job count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: false
          }
        }
      })

      const jobCount = screen.queryByText("1635")

      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
