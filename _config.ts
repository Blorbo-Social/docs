import lume from "lume/mod.ts";
import theme from "./mod.ts";
import ogimages from "lume/plugins/og_images.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
  src: "./src",
  location: new URL("https://blorbo-social.github.io/docs/"),
});

site.use(theme());
site.use(ogimages());
site.use(metas());

export default site;
