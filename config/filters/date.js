import { DateTime } from "luxon";

export default function(eleventyConfig) {
    eleventyConfig.addFilter("isoDateOnly", (date) => {
        return DateTime.fromISO(date).setZone('Pacific/Auckland').toFormat('yyyy-MM-dd');
    });

    eleventyConfig.addFilter("fullDate", (date) => {
        return DateTime.fromISO(date).setZone('Pacific/Auckland').toFormat('dd MMMM yyyy');
    });
}