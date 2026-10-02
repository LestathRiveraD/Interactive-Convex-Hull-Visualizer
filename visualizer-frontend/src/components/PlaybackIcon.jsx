// Font Awesome Free 6.7.2 by Fonticons, Inc. — icons licensed under CC BY 4.0.
// Source: https://github.com/FortAwesome/Font-Awesome/tree/6.7.2/svgs/solid
// License: https://creativecommons.org/licenses/by/4.0/
const icons = {
    'backward-fast': {
        viewBox: '0 0 512 512',
        path: 'M493.6 445c-11.2 5.3-24.5 3.6-34.1-4.4L288 297.7 288 416c0 12.4-7.2 23.7-18.4 29s-24.5 3.6-34.1-4.4L64 297.7 64 416c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64s32 14.3 32 32l0 118.3L235.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S288 83.6 288 96l0 118.3L459.5 71.4c9.5-7.9 22.8-9.7 34.1-4.4S512 83.6 512 96l0 320c0 12.4-7.2 23.7-18.4 29z',
    },
    'backward-step': {
        viewBox: '0 0 320 512',
        path: 'M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z',
    },
    'play': {
        viewBox: '0 0 384 512',
        path: 'M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z',
    },
    'forward-step': {
        viewBox: '0 0 320 512',
        path: 'M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z',
    },
    'forward-fast': {
        viewBox: '0 0 512 512',
        path: 'M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L224 297.7 224 416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L448 297.7 448 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 118.3L276.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S224 83.6 224 96l0 118.3L52.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S0 83.6 0 96L0 416c0 12.4 7.2 23.7 18.4 29z',
    },
    'stop': {
        viewBox: '0 0 384 512',
        path: 'M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z',
    },
}

function PlaybackIcon({ name }) {
    const icon = icons[name]

    return (
        <svg
            viewBox={icon.viewBox}
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
        >
            <metadata>
                Font Awesome Free 6.7.2 by Fonticons, Inc. Icons: CC BY 4.0
                (https://creativecommons.org/licenses/by/4.0/).
                https://fontawesome.com — SVG paths unchanged.
            </metadata>
            <path d={icon.path} />
        </svg>
    )
}

export default PlaybackIcon
