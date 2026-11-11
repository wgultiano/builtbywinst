import { GitHubCalendar } from 'react-github-calendar';

function GithubActivity() {
    return (
        <section className="w-full">

            <h2 className="text-xl font-semibold text-white">
                GitHub Activity
            </h2>

            <div className="github-calendar w-full pb-3">

                <GitHubCalendar
                    username="wgultiano"
                    colorScheme="dark"
                    blockSize={10.2}
                    blockMargin={3}
                    blockRadius={2}
                    fontSize={11}
                    theme={{
                        dark: [
                            '#161616',
                            '#0e4429',
                            '#006d32',
                            '#26a641',
                            '#39d353'
                        ]
                    }}
                    tooltips={{
                        activity: {
                            text: (activity) =>
                                `${activity.date}: ${activity.count} contributions`,
                            placement: 'top',
                            offset: 8,
                            hoverRestMs: 100
                        }
                    }}
                />

            </div>
        </section>
    );
}

export default GithubActivity;
