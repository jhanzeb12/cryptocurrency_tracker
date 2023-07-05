import { fetch } from "@remix-run/node";

export class Http {

    private getDefaultHeaders() {
        return {
            'Content_Type': 'application/json'
        };
    }

    private async Fetch(url: string, options: any = {}) {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw response;
            }

            const data = await response.json();

            return data;
        } catch (error) {
            throw error;
        }
    }

    static Get(url: string, headers: any = {}) {
        const http = new Http();
        // Merge headers with default Ones;
        const mergedHeaders = { ...http.getDefaultHeaders(), ...headers };

        return http.Fetch(url, {
            method: 'GET',
            headers: mergedHeaders,
        });
    }
}