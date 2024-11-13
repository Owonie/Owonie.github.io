import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '분해',
    Svg: require('@site/static/img/decomposition.svg').default,
    description: (
      <>
        맛있어 보이는 기술을 과감하게 해체합니다. 쿼크 단위까지 쪼개야 지식의 풍미가 살아납니다.
      </>
    ),
  },
  {
    title: '해석',
    Svg: require('@site/static/img/analysis.svg').default,
    description: (
      <>
        요소를 분석하여 심적표상을 훈련시킵니다. 구성 요소와 연결관계 - 흐름에 집중하면 기분이 좋습니다.
      </>
    ),
  },
  {
    title: '설계',
    Svg: require('@site/static/img/reinvention.svg').default,
    description: (
      <>
          분해, 해석, 설계를 겨쳐 지식체계를 확장합니다. 천추백련/마부작침, 이는 곧 성장을 의미합니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
