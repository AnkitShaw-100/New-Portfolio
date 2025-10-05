import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    // Fetch user's public repositories from GitHub API and sum stars/forks.
    // This avoids fetching the HTML profile page which causes JSON.parse errors.
    let stargazers_count = 0;
    let forks_count = 0;

    try {
        const res = await fetch('https://api.github.com/users/AnkitShaw-100/repos?per_page=100', {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
            // GitHub API requires a User-Agent header in some contexts; Next's fetch will send default headers.
        });

        if (res.ok) {
            const repos = (await res.json()) as RepoStats[];
            for (const r of repos) {
                stargazers_count += r.stargazers_count || 0;
                forks_count += r.forks_count || 0;
            }
        } else {
            // Non-OK response (rate limit, etc.) — leave counts at 0 and continue.
            // Optionally you could add logging here.
        }
    } catch {
        // Network or parsing error — swallow and show fallback values.
    }

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href="https://github.com/AnkitShaw-100"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design & built by Ankit
                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className="flex items-center gap-2">
                                <Star size={18} /> {stargazers_count}
                            </span>
                            <span className="flex items-center gap-2">
                                <GitFork size={18} /> {forks_count}
                            </span>
                        </div>
                    </a>

                    {/* Note: If you are not Ankit, use this copyright message instead */}
                    {/* <a href='https://www.me.toinfinite.dev/' className="leading-none text-muted-foreground hover:underline hover:text-white">
                        Design & built by Ankit  <br />
                        Revised by YOUR NAME

                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className='flex items-center gap-2'>
                                <Star size={14} /> {stargazers_count}
                            </span>
                            <span className='flex items-center gap-2'>
                                <GitFork size={14} /> {forks_count}
                            </span>
                        </div>
                    </a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
