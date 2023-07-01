import { render } from "@testing-library/react"
import Home from "./page"

// Mock router object with required properties
// const router = {
//   basePath: "",
//   pathname: "/",
//   query: {},
//   asPath: "/",
// }

describe("Home", () => {
  it("should render a component with page props", () => {
    const { getByText } = render(<Home />)
    expect(getByText("Next.js Enterprise Boilerplate")).toBeInTheDocument()
  })
})
