import pluginNavigation from "@11ty/eleventy-navigation";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import embedYouTube from "eleventy-plugin-youtube-embed";

import dateFilters from "./config/filters/date.js";

export default async function(eleventyConfig) {

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addPassthroughCopy("./assets");

    eleventyConfig.addCollection("articles", (collection) => {
        return collection.getFilteredByGlob("./content/blog/*.md").reverse();
    });

    eleventyConfig.addCollection("latestPosts", (collection) => {
        return collection.getFilteredByGlob("./content/blog/*.md").reverse().slice(0, 5);
    });

    eleventyConfig.addFilter("getAllTags", (collection) => {
        let tagSet = new Set();
        for (let item of collection) {
            (item.data.tags || []).forEach((tag) => tagSet.add(tag));
        }
        return Array.from(tagSet);
    });

    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(dateFilters);
    eleventyConfig.addPlugin(embedYouTube, { lite: true });

    const markdownItOptions = {
        html: true,
        breaks: true,
        linkify: true
    };

    let markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
    eleventyConfig.setLibrary("md", markdownLib);

    return {
        dir: {
            input: "content",
            includes: "../_includes",
            data: "../_data",
            output: "_site"
        }
    }
  };