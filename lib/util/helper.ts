

export default function normalizeYoutubeLink(url: string): string {
    try {
        const parsed = new URL(url);

        if (parsed.hostname === 'youtu.be') {
            return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`
        }

        if (parsed.searchParams.has("v")) {
            return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
        }

        // Handle shorts
        if (parsed.pathname.startsWith("/shorts/")) {
            return `https://www.youtube.com/embed/${parsed.pathname.split("/")[2]}`;
        }

        if (parsed.pathname.startsWith("/embed")) {
            return url;
        }
        return url;

    } catch {
        return url;
    }
}