import * as asserts from "https://deno.land/std@0.163.0/testing/asserts.ts";
import { blogSettings } from "./main.ts";

Deno.test(function hasTitle() {
  asserts.assertExists(blogSettings.title);
});
