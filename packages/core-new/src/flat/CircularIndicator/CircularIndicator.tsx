import React from 'react';
import clsx from 'clsx';
import { animate } from '@cb-general/core/utils/animate';

// local files
import styles from './CircularIndicator.module.scss';

const SEGMENTS = 461;

type Props = {
  className?: string;
  reverse?: boolean;
  children?: React.ReactNode;
  progress?: number;
  animDuration?: number;
  theme?: any;
};

export const CircularIndicator = (props: Props) => {
  const {
    className,
    reverse,
    progress = 0,
    animDuration = 500,
    children,
    theme,
    ...restProps
  } = props;
  const [currentSegment, setCurrentSegment] = React.useState(SEGMENTS);
  const isLoss = progress < 0;
  const indicatorRef: any = React.useRef();
  let type = isLoss ? 'red' : 'green';

  if (reverse) {
    if (currentSegment > SEGMENTS) {
      type = 'red';
    } else {
      type = 'green';
    }
  }

  const gradStyle: any = React.useMemo(
    () => ({
      transform:
        reverse && type === 'red'
          ? 'translate(-45px, -41px) rotate(90deg) rotateY(180deg)'
          : 'translate(-45px, -41px) rotate(90deg)',
      transformOrigin: 'center',
      transformBox: 'fill-box',
    }),
    [reverse, type],
  );

  React.useEffect(() => {
    let currentProgress = progress;
    if (progress) {
      if (reverse) {
        currentProgress = progress < 0 ? Math.max(-100, progress) : Math.min(100, progress);
      } else {
        currentProgress = Math.min(100, Math.abs(progress));
      }
    }
    const targetSegment = !currentProgress
      ? SEGMENTS
      : Math.round((SEGMENTS * (100 - currentProgress)) / 100);

    const deltaSegment = targetSegment - currentSegment;

    return animate({
      duration: animDuration,
      draw: (drawProgress: number) => {
        const newSegment = currentSegment + deltaSegment * drawProgress;
        setCurrentSegment(newSegment);
      },
    });
  }, [progress, reverse, animDuration]); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 147 147"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-45, -41)">
          <g>
            <circle cx="118.5" cy="114.5" r="73.5" fill="url(#background)" />
          </g>
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M117.947 59.9169V47.46C116.745 47.471 115.555 47.5113 114.368 47.5845L115.236 60.0121C116.137 59.9572 117.038 59.9242 117.947 59.9169ZM113.272 47.6543L114.141 60.0819C113.236 60.1552 112.338 60.2468 111.444 60.364L109.712 48.028C110.887 47.8705 112.074 47.7459 113.272 47.6543ZM110.356 60.5142L108.624 48.1782C107.437 48.3541 106.261 48.5593 105.096 48.7937L107.686 60.9832C108.569 60.8073 109.459 60.6498 110.356 60.5142ZM104.019 49.0278L106.609 61.2136C105.726 61.4078 104.847 61.6276 103.978 61.8694L100.542 49.8925C101.689 49.5737 102.85 49.2843 104.019 49.0278ZM95.0471 51.6733L99.3113 63.3828C98.4614 63.7016 97.6224 64.0423 96.7945 64.4014L91.728 53.018C92.8197 52.5417 93.9261 52.091 95.0471 51.6733ZM90.7243 53.4648L95.7908 64.8483C94.9701 65.222 94.1569 65.6213 93.3546 66.039L87.5078 55.0403C88.5629 54.487 89.6362 53.9595 90.7243 53.4648ZM102.923 62.1703L99.487 50.1934C98.3367 50.5341 97.2011 50.9005 96.0801 51.2998L100.341 63.0093C101.194 62.7089 102.051 62.4268 102.923 62.1703ZM86.537 55.5498L92.3838 66.5522C91.5888 66.9882 90.8085 67.4388 90.0392 67.9078L83.4377 57.3451C84.4562 56.7222 85.4856 56.1214 86.537 55.5498ZM68.0882 135.461L56.5375 140.129C56.9954 141.235 57.479 142.327 57.9955 143.4L69.1945 137.938C68.8025 137.124 68.4362 136.296 68.0882 135.461ZM51.885 122.051L64.2746 120.75C64.3772 121.652 64.5017 122.549 64.6483 123.436L52.3796 125.598C52.1854 124.425 52.0206 123.242 51.885 122.051ZM63.9742 116.951L51.526 117.387C51.5773 118.585 51.6579 119.776 51.7714 120.959L64.1611 119.659C64.0768 118.761 64.0145 117.86 63.9742 116.951ZM52.5663 126.686L64.835 124.521C64.9999 125.411 65.1903 126.297 65.3992 127.173L53.31 130.188C53.0315 129.034 52.7824 127.866 52.5663 126.686ZM63.9155 114.5C63.9155 114.046 63.9228 113.595 63.9338 113.141L51.4856 112.705C51.4673 113.302 51.46 113.899 51.46 114.5C51.46 115.098 51.4673 115.695 51.4856 116.288L63.9338 115.852C63.9228 115.405 63.9155 114.955 63.9155 114.5ZM54.5592 94.2979L66.4066 98.1485C66.1392 99.0095 65.8901 99.8778 65.6593 100.757L53.5701 97.7418C53.8705 96.5804 54.2002 95.4336 54.5592 94.2979ZM65.3992 101.823L53.31 98.8081C53.0315 99.9659 52.7824 101.131 52.5663 102.311L64.835 104.476C65.0035 103.586 65.1903 102.703 65.3992 101.823ZM52.3796 103.395L64.6483 105.56C64.5017 106.447 64.3772 107.345 64.2746 108.242L51.885 106.942C52.0206 105.751 52.1854 104.567 52.3796 103.395ZM67.6742 94.5544L56.1235 89.8867C55.6875 90.9932 55.2809 92.118 54.8999 93.2537L66.7473 97.1044C67.0367 96.2434 67.3445 95.3934 67.6742 94.5544ZM51.7714 108.037L64.1611 109.338C64.0768 110.235 64.0145 111.137 63.9742 112.045L51.526 111.609C51.5773 110.411 51.6579 109.221 51.7714 108.037ZM69.6743 138.927L58.479 144.389C59.0139 145.459 59.5744 146.514 60.1605 147.551L70.9492 141.323C70.5059 140.535 70.081 139.736 69.6743 138.927ZM54.8962 135.743L66.7473 131.892C67.0331 132.753 67.3445 133.603 67.6742 134.442L56.1198 139.11C55.6802 138.003 55.2772 136.879 54.8962 135.743ZM65.6593 128.239L53.5701 131.255C53.8705 132.416 54.2002 133.563 54.5592 134.699L66.4066 130.848C66.1355 129.987 65.8864 129.119 65.6593 128.239ZM78.6497 60.5835L85.9728 70.6589C85.2438 71.1975 84.5331 71.7544 83.837 72.3333L75.8289 62.7891C76.7484 62.027 77.6899 61.2943 78.6497 60.5835ZM75.1512 81.3282L65.3369 73.6562C64.6079 74.6015 63.9082 75.5651 63.2305 76.5507L73.5576 83.5192C74.0705 82.7754 74.6017 82.0427 75.1512 81.3282ZM74.9899 63.4966L82.9945 73.0371C82.3094 73.627 81.6353 74.2315 80.9796 74.8544L72.3267 65.8927C73.1949 65.0684 74.0814 64.2733 74.9899 63.4966ZM80.1919 75.6162L71.539 66.6582C70.6854 67.4935 69.8575 68.3509 69.0515 69.2339L78.3089 77.569C78.9207 76.9022 79.5471 76.2537 80.1919 75.6162ZM62.615 77.4629L72.9422 84.4314C72.4439 85.1825 71.964 85.9482 71.5024 86.7286L60.7137 80.5002C61.3219 79.467 61.9556 78.4558 62.615 77.4629ZM69.1908 91.0589L57.9918 85.5962C57.479 86.6697 56.9917 87.7615 56.5338 88.868L68.0845 93.5356C68.4362 92.7003 68.8062 91.8723 69.1908 91.0589ZM68.3153 70.0508L77.5727 78.3859C76.9755 79.0601 76.393 79.7525 75.8252 80.4596L66.011 72.7913C66.7547 71.857 67.524 70.9447 68.3153 70.0508ZM70.9529 87.6777L60.1642 81.4492C59.5744 82.4861 59.0139 83.5412 58.4827 84.6111L69.678 90.0738C70.081 89.2641 70.5059 88.4654 70.9529 87.6777ZM82.5036 57.9272L89.105 68.4936C88.343 68.9809 87.5957 69.4865 86.8557 70.0105L79.5363 59.9313C80.5071 59.2389 81.4962 58.5684 82.5036 57.9272Z"
              fill="#616161"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M122.625 47.5806L121.757 60.0082C120.859 59.9569 119.955 59.924 119.046 59.913V47.4561C120.248 47.467 121.438 47.5073 122.625 47.5806ZM127.285 48.0276L125.552 60.3636C124.658 60.2464 123.761 60.1548 122.856 60.0815L123.724 47.6539C124.918 47.7492 126.109 47.8737 127.285 48.0276ZM131.901 48.7933L129.311 60.9828C128.428 60.8033 127.538 60.6494 126.64 60.5138L128.373 48.1778C129.56 48.3537 130.736 48.5552 131.901 48.7933ZM133.018 61.8658L136.451 49.8888C135.304 49.5701 134.147 49.2843 132.974 49.0242L130.384 61.2099C131.271 61.4078 132.15 61.6276 133.018 61.8658ZM143.642 66.0351L149.489 55.0364C148.434 54.4832 147.36 53.9593 146.272 53.461L141.206 64.8444C142.03 65.2218 142.84 65.6211 143.642 66.0351ZM145.269 53.014L140.202 64.3975C139.374 64.0384 138.535 63.7013 137.689 63.3789L141.95 51.6694C143.071 52.0871 144.177 52.5377 145.269 53.014ZM136.656 63.0052L140.917 51.2957C139.796 50.8963 138.66 50.53 137.51 50.1892L134.073 62.1662C134.945 62.4263 135.803 62.7048 136.656 63.0052ZM153.562 57.3483L146.961 67.911C146.188 67.4384 145.408 66.9841 144.613 66.5554L150.463 55.5531C151.515 56.1246 152.548 56.7255 153.562 57.3483ZM171.341 100.757L183.43 97.7417C183.13 96.5802 182.8 95.4335 182.441 94.2977L170.594 98.1484C170.861 99.0093 171.11 99.8777 171.341 100.757ZM157.46 59.9313L150.137 70.0104C149.405 69.4865 148.654 68.9809 147.892 68.4936L154.493 57.9272C155.5 58.5683 156.49 59.2388 157.46 59.9313ZM172.726 108.246L185.115 106.945C184.98 105.754 184.815 104.571 184.621 103.399L172.352 105.56C172.499 106.447 172.623 107.344 172.726 108.246ZM182.1 93.2535L170.253 97.1042C169.964 96.2432 169.656 95.3932 169.323 94.5542L180.877 89.8865C181.313 90.993 181.719 92.1177 182.1 93.2535ZM168.912 93.5356L180.463 88.868C180.005 87.7615 179.521 86.6697 179.005 85.5962L167.806 91.0589C168.194 91.8723 168.564 92.7003 168.912 93.5356ZM173.067 115.855C173.078 115.405 173.085 114.954 173.085 114.5C173.085 114.046 173.078 113.595 173.067 113.144L185.515 112.708C185.533 113.305 185.54 113.903 185.54 114.5C185.54 115.101 185.529 115.698 185.515 116.291L173.067 115.855ZM173.026 112.045L185.474 111.609C185.423 110.411 185.343 109.217 185.229 108.037L172.839 109.338C172.924 110.235 172.986 111.137 173.026 112.045ZM184.434 102.314L172.165 104.476C171.997 103.585 171.81 102.702 171.601 101.827L183.69 98.8115C183.969 99.9656 184.218 101.134 184.434 102.314ZM158.691 77.5651L167.949 69.23C167.143 68.3507 166.311 67.4933 165.461 66.6543L156.808 75.616C157.453 76.2498 158.079 76.902 158.691 77.5651ZM164.67 65.8886L156.017 74.8502C155.361 74.231 154.691 73.6265 154.002 73.033L162.007 63.4925C162.915 64.2692 163.805 65.0679 164.67 65.8886ZM153.163 72.3296L161.172 62.7854C160.252 62.027 159.311 61.2905 158.351 60.5798L151.028 70.6589C151.753 71.1974 152.464 71.7543 153.163 72.3296ZM173.77 76.5539L163.443 83.5188C162.93 82.7714 162.399 82.0423 161.849 81.3278L171.664 73.6595C172.389 74.6048 173.092 75.5683 173.77 76.5539ZM165.498 86.7282L176.287 80.4998C175.678 79.4703 175.045 78.4591 174.385 77.4625L164.058 84.4274C164.556 85.1821 165.036 85.9479 165.498 86.7282ZM170.986 72.7912L161.172 80.4595C160.607 79.7524 160.025 79.0599 159.428 78.3821L168.682 70.0507C169.473 70.9446 170.242 71.8569 170.986 72.7912ZM167.322 90.0697L178.518 84.6069C177.983 83.5371 177.422 82.4819 176.836 81.4451L166.047 87.6735C166.494 88.4649 166.919 89.26 167.322 90.0697ZM185.229 120.959L172.839 119.658C172.924 118.765 172.986 117.863 173.026 116.951L185.474 117.387C185.423 118.585 185.343 119.776 185.229 120.959ZM172.352 123.44L184.621 125.601C184.815 124.429 184.98 123.245 185.115 122.055L172.726 120.754C172.623 121.655 172.499 122.549 172.352 123.44ZM179.008 143.404L167.809 137.941C168.198 137.124 168.564 136.299 168.916 135.464L180.467 140.132C180.009 141.238 179.521 142.33 179.008 143.404ZM169.326 134.446L180.881 139.113C181.316 138.007 181.723 136.882 182.104 135.746L170.257 131.896C169.964 132.757 169.656 133.607 169.326 134.446ZM182.441 134.702L170.594 130.851C170.861 129.99 171.114 129.118 171.341 128.243L183.43 131.258C183.13 132.419 182.8 133.566 182.441 134.702ZM171.601 127.177L183.69 130.192C183.969 129.034 184.218 127.869 184.434 126.689L172.165 124.524C171.997 125.414 171.81 126.297 171.601 127.177ZM66.0112 156.205L75.8255 148.537C76.3896 149.244 76.9721 149.936 77.5729 150.61L68.3155 158.945C67.5242 158.051 66.7549 157.139 66.0112 156.205ZM119.046 169.083V181.54C120.248 181.529 121.438 181.489 122.625 181.415L121.757 168.988C120.859 169.043 119.955 169.076 119.046 169.083ZM69.048 159.766L78.3054 151.431C78.9172 152.098 79.5473 152.746 80.1884 153.38L71.5354 162.342C70.6855 161.503 69.8539 160.645 69.048 159.766ZM73.554 145.481L63.2268 152.446C63.9046 153.431 64.6079 154.395 65.3333 155.34L75.1475 147.672C74.6017 146.954 74.0668 146.225 73.554 145.481ZM123.72 181.346L122.852 168.918C123.757 168.845 124.658 168.753 125.548 168.64L127.281 180.976C126.105 181.13 124.918 181.254 123.72 181.346ZM71.4989 142.271L60.7102 148.5C61.3183 149.529 61.9521 150.541 62.6115 151.537L72.9386 144.572C72.4404 143.814 71.9605 143.048 71.4989 142.271ZM141.946 177.327L137.685 165.621C138.535 165.302 139.374 164.961 140.198 164.599L145.265 175.982C144.173 176.458 143.067 176.909 141.946 177.327ZM166.051 141.323L176.84 147.551C177.43 146.514 177.99 145.459 178.521 144.389L167.326 138.926C166.919 139.736 166.494 140.535 166.051 141.323ZM132.974 179.976L130.384 167.79C131.271 167.592 132.15 167.376 133.018 167.138L136.451 179.115C135.304 179.43 134.147 179.719 132.974 179.976ZM126.64 168.486L128.373 180.822C129.56 180.646 130.736 180.441 131.901 180.206L129.311 168.017C128.428 168.196 127.538 168.35 126.64 168.486ZM137.506 178.81L134.073 166.834C134.942 166.573 135.803 166.295 136.652 165.994L140.913 177.704C139.792 178.103 138.656 178.47 137.506 178.81ZM156.808 153.384L165.461 162.345C166.315 161.51 167.143 160.653 167.952 159.77L158.695 151.435C158.079 152.098 157.453 152.75 156.808 153.384ZM146.272 175.539L141.206 164.155C142.03 163.778 142.84 163.382 143.642 162.965L149.489 173.963C148.434 174.517 147.36 175.04 146.272 175.539ZM164.058 144.572L174.385 151.537C175.045 150.544 175.678 149.529 176.287 148.5L165.498 142.271C165.036 143.052 164.556 143.818 164.058 144.572ZM162.007 165.504L154.002 155.963C154.691 155.373 155.361 154.769 156.017 154.146L164.67 163.107C163.805 163.932 162.915 164.727 162.007 165.504ZM161.849 147.676L171.664 155.344C172.393 154.399 173.096 153.431 173.77 152.449L163.443 145.485C162.93 146.228 162.399 146.957 161.849 147.676ZM158.347 168.42L151.028 158.341C151.753 157.802 152.467 157.245 153.16 156.67L161.168 166.214C160.248 166.976 159.307 167.709 158.347 168.42ZM144.613 162.448L150.463 173.45C151.515 172.879 152.548 172.278 153.562 171.655L146.961 161.089C146.188 161.561 145.408 162.016 144.613 162.448ZM154.493 171.076L147.892 160.51C148.654 160.019 149.405 159.513 150.141 158.993L157.46 169.072C156.49 169.765 155.5 170.435 154.493 171.076ZM159.428 150.618L168.685 158.953C169.476 158.059 170.246 157.146 170.989 156.212L161.175 148.544C160.607 149.247 160.025 149.94 159.428 150.618ZM91.7282 175.982L96.7947 164.599C97.6226 164.958 98.4615 165.298 99.3078 165.617L95.0472 177.327C93.9262 176.909 92.8199 176.458 91.7282 175.982ZM90.0355 161.089L83.4341 171.651C84.4488 172.278 85.4819 172.879 86.5333 173.447L92.3837 162.444C91.5888 162.012 90.8048 161.558 90.0355 161.089ZM100.542 179.111L103.978 167.134C104.847 167.372 105.722 167.592 106.609 167.79L104.019 179.976C102.846 179.715 101.689 179.43 100.542 179.111ZM111.445 168.636L109.712 180.972C110.888 181.126 112.078 181.251 113.273 181.346L114.141 168.918C113.236 168.845 112.338 168.753 111.445 168.636ZM87.508 173.96L93.3547 162.961C94.1534 163.379 94.9666 163.774 95.7909 164.152L90.7244 175.535C89.6364 175.037 88.563 174.513 87.508 173.96ZM80.9797 154.146L72.3267 163.107C73.1913 163.928 74.0815 164.727 74.99 165.504L82.9945 155.963C82.3058 155.373 81.6354 154.769 80.9797 154.146ZM105.096 180.206L107.686 168.017C108.569 168.196 109.459 168.35 110.357 168.486L108.624 180.822C107.437 180.646 106.261 180.445 105.096 180.206ZM86.8559 158.986L79.5364 169.065C80.5072 169.757 81.4963 170.428 82.5038 171.069L89.1052 160.506C88.3432 160.019 87.5922 159.51 86.8559 158.986ZM114.371 181.419L115.24 168.991C116.134 169.043 117.038 169.076 117.951 169.087V181.544C116.749 181.533 115.558 181.492 114.371 181.419ZM83.8336 156.67L75.8254 166.214C76.7449 166.976 77.6864 167.709 78.6462 168.42L85.9693 158.341C85.244 157.799 84.5296 157.242 83.8336 156.67ZM96.0802 177.704L100.341 165.994C101.191 166.291 102.052 166.573 102.92 166.834L99.4871 178.81C98.3368 178.47 97.2012 178.103 96.0802 177.704Z"
              fill="#616161"
            />
          </g>
          <g
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: 'center',
              transformBox: 'fill-box',
            }}
            clipPath="url(#clip0)"
          >
            <circle
              cx="118.5"
              cy="114.5"
              r="73.5"
              stroke="url(#grad)"
              strokeWidth="50"
              strokeDashoffset={currentSegment}
              strokeDasharray={SEGMENTS}
              fill="transparent"
              ref={indicatorRef}
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M118.5 181.54C155.525 181.54 185.54 151.525 185.54 114.5C185.54 77.4749 155.525 47.46 118.5 47.46C81.4749 47.46 51.46 77.4749 51.46 114.5C51.46 151.525 81.4749 181.54 118.5 181.54ZM118.5 175.81C152.361 175.81 179.81 148.361 179.81 114.5C179.81 80.6394 152.361 53.1899 118.5 53.1899C84.6394 53.1899 57.1899 80.6394 57.1899 114.5C57.1899 148.361 84.6394 175.81 118.5 175.81Z"
            fill="black"
            fillOpacity="0.3"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="237"
            height="237"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="22.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.113725 0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0.9 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <linearGradient
            id="background"
            x1="118.5"
            y1="49"
            x2="118.5"
            y2="188"
            gradientUnits="userSpaceOnUse"
          >
            {theme.background.map((stopProps: any, index: number) => (
              <stop {...stopProps} key={index} />
            ))}
          </linearGradient>
          <linearGradient
            id="green_start"
            x1="82.9746"
            y1="167.215"
            x2="133.5"
            y2="93"
            gradientUnits="userSpaceOnUse"
          >
            {theme.progress.greenStart.map((stopProps: any, index: number) => (
              <stop {...stopProps} key={index} />
            ))}
          </linearGradient>
          <linearGradient
            id="green_end"
            x1="47.5"
            y1="150"
            x2="67"
            y2="98"
            gradientUnits="userSpaceOnUse"
          >
            {theme.progress.greenEnd.map((stopProps: any, index: number) => (
              <stop {...stopProps} key={index} />
            ))}
          </linearGradient>
          <linearGradient
            id="red_start"
            x1="82.9745"
            y1="167.215"
            x2="123"
            y2="92"
            gradientUnits="userSpaceOnUse"
          >
            {theme.progress.redStart.map((stopProps: any, index: number) => (
              <stop {...stopProps} key={index} />
            ))}
            <linearGradient
              id="red_end"
              x1="47.5"
              y1="150"
              x2="67"
              y2="98"
              gradientUnits="userSpaceOnUse"
            >
              {theme.progress.redEnd.map((stopProps: any, index: number) => (
                <stop {...stopProps} key={index} />
              ))}
            </linearGradient>
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="118.5"
            y1="64"
            x2="118.243"
            y2="97.195"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0">
            <rect width="134.08" height="134.08" fill="white" transform="translate(51.46 47.46)" />
          </clipPath>
          <pattern id="grad" patternUnits="objectBoundingBox" x="0" y="0" width="1" height="1">
            <g style={gradStyle} clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M117.947 59.9169V47.46C116.745 47.471 115.555 47.5113 114.368 47.5845L115.236 60.0121C116.137 59.9572 117.038 59.9242 117.947 59.9169ZM113.272 47.6543L114.141 60.0819C113.236 60.1552 112.338 60.2468 111.444 60.364L109.712 48.028C110.887 47.8705 112.074 47.7459 113.272 47.6543ZM110.356 60.5142L108.624 48.1782C107.437 48.3541 106.261 48.5593 105.096 48.7937L107.686 60.9832C108.569 60.8073 109.459 60.6498 110.356 60.5142ZM104.019 49.0278L106.609 61.2136C105.726 61.4078 104.847 61.6276 103.978 61.8694L100.542 49.8925C101.689 49.5737 102.85 49.2843 104.019 49.0278ZM95.0471 51.6733L99.3113 63.3828C98.4614 63.7016 97.6224 64.0423 96.7945 64.4014L91.728 53.018C92.8197 52.5417 93.9261 52.091 95.0471 51.6733ZM90.7243 53.4648L95.7908 64.8483C94.9701 65.222 94.1569 65.6213 93.3546 66.039L87.5078 55.0403C88.5629 54.487 89.6362 53.9595 90.7243 53.4648ZM102.923 62.1703L99.487 50.1934C98.3367 50.5341 97.2011 50.9005 96.0801 51.2998L100.341 63.0093C101.194 62.7089 102.051 62.4268 102.923 62.1703ZM86.537 55.5498L92.3838 66.5522C91.5888 66.9882 90.8085 67.4388 90.0392 67.9078L83.4377 57.3451C84.4562 56.7222 85.4856 56.1214 86.537 55.5498ZM68.0882 135.461L56.5375 140.129C56.9954 141.235 57.479 142.327 57.9955 143.4L69.1945 137.938C68.8025 137.124 68.4362 136.296 68.0882 135.461ZM51.885 122.051L64.2746 120.75C64.3772 121.652 64.5017 122.549 64.6483 123.436L52.3796 125.598C52.1854 124.425 52.0206 123.242 51.885 122.051ZM63.9742 116.951L51.526 117.387C51.5773 118.585 51.6579 119.776 51.7714 120.959L64.1611 119.659C64.0768 118.761 64.0145 117.86 63.9742 116.951ZM52.5663 126.686L64.835 124.521C64.9999 125.411 65.1903 126.297 65.3992 127.173L53.31 130.188C53.0315 129.034 52.7824 127.866 52.5663 126.686ZM63.9155 114.5C63.9155 114.046 63.9228 113.595 63.9338 113.141L51.4856 112.705C51.4673 113.302 51.46 113.899 51.46 114.5C51.46 115.098 51.4673 115.695 51.4856 116.288L63.9338 115.852C63.9228 115.405 63.9155 114.955 63.9155 114.5ZM54.5592 94.2979L66.4066 98.1485C66.1392 99.0095 65.8901 99.8778 65.6593 100.757L53.5701 97.7418C53.8705 96.5804 54.2002 95.4336 54.5592 94.2979ZM65.3992 101.823L53.31 98.8081C53.0315 99.9659 52.7824 101.131 52.5663 102.311L64.835 104.476C65.0035 103.586 65.1903 102.703 65.3992 101.823ZM52.3796 103.395L64.6483 105.56C64.5017 106.447 64.3772 107.345 64.2746 108.242L51.885 106.942C52.0206 105.751 52.1854 104.567 52.3796 103.395ZM67.6742 94.5544L56.1235 89.8867C55.6875 90.9932 55.2809 92.118 54.8999 93.2537L66.7473 97.1044C67.0367 96.2434 67.3445 95.3934 67.6742 94.5544ZM51.7714 108.037L64.1611 109.338C64.0768 110.235 64.0145 111.137 63.9742 112.045L51.526 111.609C51.5773 110.411 51.6579 109.221 51.7714 108.037ZM69.6743 138.927L58.479 144.389C59.0139 145.459 59.5744 146.514 60.1605 147.551L70.9492 141.323C70.5059 140.535 70.081 139.736 69.6743 138.927ZM54.8962 135.743L66.7473 131.892C67.0331 132.753 67.3445 133.603 67.6742 134.442L56.1198 139.11C55.6802 138.003 55.2772 136.879 54.8962 135.743ZM65.6593 128.239L53.5701 131.255C53.8705 132.416 54.2002 133.563 54.5592 134.699L66.4066 130.848C66.1355 129.987 65.8864 129.119 65.6593 128.239ZM78.6497 60.5835L85.9728 70.6589C85.2438 71.1975 84.5331 71.7544 83.837 72.3333L75.8289 62.7891C76.7484 62.027 77.6899 61.2943 78.6497 60.5835ZM75.1512 81.3282L65.3369 73.6562C64.6079 74.6015 63.9082 75.5651 63.2305 76.5507L73.5576 83.5192C74.0705 82.7754 74.6017 82.0427 75.1512 81.3282ZM74.9899 63.4966L82.9945 73.0371C82.3094 73.627 81.6353 74.2315 80.9796 74.8544L72.3267 65.8927C73.1949 65.0684 74.0814 64.2733 74.9899 63.4966ZM80.1919 75.6162L71.539 66.6582C70.6854 67.4935 69.8575 68.3509 69.0515 69.2339L78.3089 77.569C78.9207 76.9022 79.5471 76.2537 80.1919 75.6162ZM62.615 77.4629L72.9422 84.4314C72.4439 85.1825 71.964 85.9482 71.5024 86.7286L60.7137 80.5002C61.3219 79.467 61.9556 78.4558 62.615 77.4629ZM69.1908 91.0589L57.9918 85.5962C57.479 86.6697 56.9917 87.7615 56.5338 88.868L68.0845 93.5356C68.4362 92.7003 68.8062 91.8723 69.1908 91.0589ZM68.3153 70.0508L77.5727 78.3859C76.9755 79.0601 76.393 79.7525 75.8252 80.4596L66.011 72.7913C66.7547 71.857 67.524 70.9447 68.3153 70.0508ZM70.9529 87.6777L60.1642 81.4492C59.5744 82.4861 59.0139 83.5412 58.4827 84.6111L69.678 90.0738C70.081 89.2641 70.5059 88.4654 70.9529 87.6777ZM82.5036 57.9272L89.105 68.4936C88.343 68.9809 87.5957 69.4865 86.8557 70.0105L79.5363 59.9313C80.5071 59.2389 81.4962 58.5684 82.5036 57.9272Z"
                fill={`url(#${type}_end)`}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M122.625 47.5806L121.757 60.0082C120.859 59.9569 119.954 59.924 119.046 59.913V47.4561C120.248 47.467 121.438 47.5073 122.625 47.5806ZM127.285 48.0276L125.552 60.3636C124.658 60.2464 123.761 60.1548 122.856 60.0815L123.724 47.6539C124.918 47.7492 126.109 47.8737 127.285 48.0276ZM131.901 48.7933L129.311 60.9828C128.428 60.8033 127.538 60.6494 126.64 60.5138L128.373 48.1778C129.56 48.3537 130.736 48.5552 131.901 48.7933ZM133.018 61.8658L136.451 49.8888C135.304 49.5701 134.146 49.2843 132.974 49.0242L130.384 61.2099C131.271 61.4078 132.15 61.6276 133.018 61.8658ZM143.642 66.0351L149.489 55.0364C148.434 54.4832 147.36 53.9593 146.272 53.461L141.206 64.8444C142.03 65.2218 142.84 65.6211 143.642 66.0351ZM145.268 53.014L140.202 64.3975C139.374 64.0384 138.535 63.7013 137.689 63.3789L141.949 51.6694C143.07 52.0871 144.177 52.5377 145.268 53.014ZM136.656 63.0052L140.917 51.2957C139.796 50.8963 138.66 50.53 137.51 50.1892L134.073 62.1662C134.945 62.4263 135.802 62.7048 136.656 63.0052ZM153.562 57.3483L146.961 67.911C146.188 67.4384 145.408 66.9841 144.613 66.5554L150.463 55.5531C151.514 56.1246 152.548 56.7255 153.562 57.3483ZM171.341 100.757L183.43 97.7417C183.13 96.5802 182.8 95.4335 182.441 94.2977L170.594 98.1484C170.861 99.0093 171.11 99.8777 171.341 100.757ZM157.46 59.9313L150.137 70.0104C149.404 69.4865 148.653 68.9809 147.891 68.4936L154.493 57.9272C155.5 58.5683 156.489 59.2388 157.46 59.9313ZM172.726 108.246L185.115 106.945C184.98 105.754 184.815 104.571 184.621 103.399L172.352 105.56C172.498 106.447 172.623 107.344 172.726 108.246ZM182.1 93.2535L170.253 97.1042C169.964 96.2432 169.656 95.3932 169.322 94.5542L180.877 89.8865C181.313 90.993 181.719 92.1177 182.1 93.2535ZM168.912 93.5356L180.463 88.868C180.005 87.7615 179.521 86.6697 179.005 85.5962L167.806 91.0589C168.194 91.8723 168.564 92.7003 168.912 93.5356ZM173.066 115.855C173.077 115.405 173.085 114.954 173.085 114.5C173.085 114.046 173.077 113.595 173.066 113.144L185.515 112.708C185.533 113.305 185.54 113.903 185.54 114.5C185.54 115.101 185.529 115.698 185.515 116.291L173.066 115.855ZM173.026 112.045L185.474 111.609C185.423 110.411 185.342 109.217 185.229 108.037L172.839 109.338C172.924 110.235 172.986 111.137 173.026 112.045ZM184.434 102.314L172.165 104.476C171.997 103.585 171.81 102.702 171.601 101.827L183.69 98.8115C183.969 99.9656 184.218 101.134 184.434 102.314ZM158.691 77.5651L167.948 69.23C167.143 68.3507 166.311 67.4933 165.461 66.6543L156.808 75.616C157.453 76.2498 158.079 76.902 158.691 77.5651ZM164.67 65.8886L156.017 74.8502C155.361 74.231 154.691 73.6265 154.002 73.033L162.007 63.4925C162.915 64.2692 163.805 65.0679 164.67 65.8886ZM153.163 72.3296L161.171 62.7854C160.252 62.027 159.31 61.2905 158.351 60.5798L151.028 70.6589C151.753 71.1974 152.464 71.7543 153.163 72.3296ZM173.77 76.5539L163.443 83.5188C162.93 82.7714 162.399 82.0423 161.849 81.3278L171.663 73.6595C172.389 74.6048 173.092 75.5683 173.77 76.5539ZM165.498 86.7282L176.286 80.4998C175.678 79.4703 175.045 78.4591 174.385 77.4625L164.058 84.4274C164.556 85.1821 165.036 85.9479 165.498 86.7282ZM170.986 72.7912L161.171 80.4595C160.607 79.7524 160.025 79.0599 159.428 78.3821L168.681 70.0507C169.473 70.9446 170.242 71.8569 170.986 72.7912ZM167.322 90.0697L178.517 84.6069C177.983 83.5371 177.422 82.4819 176.836 81.4451L166.047 87.6735C166.494 88.4649 166.919 89.26 167.322 90.0697ZM185.229 120.959L172.839 119.658C172.924 118.765 172.986 117.863 173.026 116.951L185.474 117.387C185.423 118.585 185.342 119.776 185.229 120.959ZM172.352 123.44L184.621 125.601C184.815 124.429 184.98 123.245 185.115 122.055L172.726 120.754C172.623 121.655 172.498 122.549 172.352 123.44ZM179.008 143.404L167.809 137.941C168.198 137.124 168.564 136.299 168.916 135.464L180.466 140.132C180.008 141.238 179.521 142.33 179.008 143.404ZM169.326 134.446L180.88 139.113C181.316 138.007 181.723 136.882 182.104 135.746L170.257 131.896C169.963 132.757 169.656 133.607 169.326 134.446ZM182.441 134.702L170.594 130.851C170.861 129.99 171.114 129.118 171.341 128.243L183.43 131.258C183.13 132.419 182.8 133.566 182.441 134.702ZM171.601 127.177L183.69 130.192C183.969 129.034 184.218 127.869 184.434 126.689L172.165 124.524C171.997 125.414 171.81 126.297 171.601 127.177ZM66.0111 156.205L75.8253 148.537C76.3895 149.244 76.972 149.936 77.5728 150.61L68.3154 158.945C67.5241 158.051 66.7548 157.139 66.0111 156.205ZM119.046 169.083V181.54C120.248 181.529 121.438 181.489 122.625 181.415L121.757 168.988C120.859 169.043 119.954 169.076 119.046 169.083ZM69.0479 159.766L78.3053 151.431C78.917 152.098 79.5471 152.746 80.1882 153.38L71.5353 162.342C70.6854 161.503 69.8538 160.645 69.0479 159.766ZM73.5538 145.481L63.2267 152.446C63.9044 153.431 64.6078 154.395 65.3332 155.34L75.1474 147.672C74.6016 146.954 74.0667 146.225 73.5538 145.481ZM123.72 181.346L122.852 168.918C123.757 168.845 124.658 168.753 125.548 168.64L127.281 180.976C126.105 181.13 124.918 181.254 123.72 181.346ZM71.4988 142.271L60.7101 148.5C61.3182 149.529 61.952 150.541 62.6114 151.537L72.9385 144.572C72.4403 143.814 71.9604 143.048 71.4988 142.271ZM141.946 177.327L137.685 165.621C138.535 165.302 139.374 164.961 140.198 164.599L145.265 175.982C144.173 176.458 143.067 176.909 141.946 177.327ZM166.051 141.323L176.84 147.551C177.429 146.514 177.99 145.459 178.521 144.389L167.326 138.926C166.919 139.736 166.494 140.535 166.051 141.323ZM132.974 179.976L130.384 167.79C131.271 167.592 132.15 167.376 133.018 167.138L136.451 179.115C135.304 179.43 134.146 179.719 132.974 179.976ZM126.64 168.486L128.373 180.822C129.56 180.646 130.736 180.441 131.901 180.206L129.311 168.017C128.428 168.196 127.538 168.35 126.64 168.486ZM137.506 178.81L134.073 166.834C134.942 166.573 135.802 166.295 136.652 165.994L140.913 177.704C139.792 178.103 138.656 178.47 137.506 178.81ZM156.808 153.384L165.461 162.345C166.315 161.51 167.143 160.653 167.952 159.77L158.695 151.435C158.079 152.098 157.453 152.75 156.808 153.384ZM146.272 175.539L141.206 164.155C142.03 163.778 142.84 163.382 143.642 162.965L149.489 173.963C148.434 174.517 147.36 175.04 146.272 175.539ZM164.058 144.572L174.385 151.537C175.045 150.544 175.678 149.529 176.286 148.5L165.498 142.271C165.036 143.052 164.556 143.818 164.058 144.572ZM162.007 165.504L154.002 155.963C154.691 155.373 155.361 154.769 156.017 154.146L164.67 163.107C163.805 163.932 162.915 164.727 162.007 165.504ZM161.849 147.676L171.663 155.344C172.392 154.399 173.096 153.431 173.77 152.449L163.443 145.485C162.93 146.228 162.399 146.957 161.849 147.676ZM158.347 168.42L151.028 158.341C151.753 157.802 152.467 157.245 153.16 156.67L161.168 166.214C160.248 166.976 159.307 167.709 158.347 168.42ZM144.613 162.448L150.463 173.45C151.514 172.879 152.548 172.278 153.562 171.655L146.961 161.089C146.188 161.561 145.408 162.016 144.613 162.448ZM154.493 171.076L147.891 160.51C148.653 160.019 149.404 159.513 150.141 158.993L157.46 169.072C156.489 169.765 155.5 170.435 154.493 171.076ZM159.428 150.618L168.685 158.953C169.476 158.059 170.246 157.146 170.989 156.212L161.175 148.544C160.607 149.247 160.025 149.94 159.428 150.618ZM91.7281 175.982L96.7945 164.599C97.6225 164.958 98.4614 165.298 99.3076 165.617L95.0471 177.327C93.9261 176.909 92.8198 176.458 91.7281 175.982ZM90.0354 161.089L83.4339 171.651C84.4487 172.278 85.4818 172.879 86.5332 173.447L92.3836 162.444C91.5887 162.012 90.8047 161.558 90.0354 161.089ZM100.542 179.111L103.978 167.134C104.847 167.372 105.722 167.592 106.609 167.79L104.019 179.976C102.846 179.715 101.689 179.43 100.542 179.111ZM111.444 168.636L109.712 180.972C110.888 181.126 112.078 181.251 113.272 181.346L114.141 168.918C113.236 168.845 112.338 168.753 111.444 168.636ZM87.5078 173.96L93.3546 162.961C94.1532 163.379 94.9665 163.774 95.7908 164.152L90.7243 175.535C89.6363 175.037 88.5629 174.513 87.5078 173.96ZM80.9796 154.146L72.3266 163.107C73.1912 163.928 74.0814 164.727 74.9899 165.504L82.9944 155.963C82.3057 155.373 81.6353 154.769 80.9796 154.146ZM105.096 180.206L107.686 168.017C108.569 168.196 109.459 168.35 110.356 168.486L108.624 180.822C107.437 180.646 106.261 180.445 105.096 180.206ZM86.8558 158.986L79.5363 169.065C80.5071 169.757 81.4962 170.428 82.5037 171.069L89.1051 160.506C88.3431 160.019 87.5921 159.51 86.8558 158.986ZM114.371 181.419L115.24 168.991C116.133 169.043 117.038 169.076 117.95 169.087V181.544C116.749 181.533 115.558 181.492 114.371 181.419ZM83.8335 156.67L75.8253 166.214C76.7448 166.976 77.6863 167.709 78.6461 168.42L85.9692 158.341C85.2439 157.799 84.5295 157.242 83.8335 156.67ZM96.0801 177.704L100.341 165.994C101.19 166.291 102.051 166.573 102.92 166.834L99.487 178.81C98.3367 178.47 97.2011 178.103 96.0801 177.704Z"
                fill={`url(#${type}_start)`}
              />
            </g>
          </pattern>
        </defs>
      </svg>
      <div className={styles.button}>{children}</div>
    </div>
  );
};

CircularIndicator.defaultProps = {
  theme: {
    background: [{ stopColor: '#0D0D12' }, { offset: 1, stopColor: '#1D1A1C' }],
    progress: {
      greenStart: [
        { offset: 0.383099, stopColor: '#68BD29' },
        { offset: 1, stopColor: '#DAC315' },
      ],
      greenEnd: [{ stopColor: '#7DD12E' }, { offset: '1', stopColor: '#31881C' }],
      redStart: [
        { offset: 0.383099, stopColor: '#8A1617' },
        { offset: 1, stopColor: '#F46E0D' },
      ],
      redEnd: [{ stopColor: '#8A1617' }, { offset: 1, stopColor: '#C00F0F' }],
    },
  },
};
