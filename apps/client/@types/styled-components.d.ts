import { Theme } from "@material-ui/core";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
