import TransformTranslationFormat from "../TransformTranslationFormat";
import demoTranslation from "./demoTranslation";
import demoTranslationReqResult from "./demoTranslationReqResult";
// import { shallow } from "enzyme";

it("returns the correct translation format", () => {
  const resulttedTranslation = TransformTranslationFormat(demoTranslation);
  expect(resulttedTranslation).toEqual(demoTranslationReqResult);
});
