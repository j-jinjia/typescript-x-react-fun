import { customRender } from "../../utils/testUtils";
import Coaches from "./Coaches";

export default describe("Coaches Page", () => {
  it("Renders component in loading state", () => {
    const { container } = customRender(<Coaches />);
    expect(container).toMatchSnapshot();
  });
});
