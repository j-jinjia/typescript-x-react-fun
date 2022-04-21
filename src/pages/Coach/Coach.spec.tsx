import { customRender } from "../../utils/testUtils";
import Coach from "./Coach";

export default describe("Coach Page", () => {
  it("Renders component in loading state", () => {
    const { container } = customRender(<Coach />);
    expect(container).toMatchSnapshot();
  });
});
