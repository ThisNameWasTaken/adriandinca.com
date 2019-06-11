import React, { memo } from 'react';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
} from './material/Card';
import { Headline4, Body1 } from './material/Typography';
import Button from './material/Button';
import Image from './image';
import { ChipSet, Chip } from './material/Chip';

const ProjectCard = ({
  headline,
  body,
  media,
  sourceButton,
  demoButton,
  tags,
  className = '',
  ...otherProps
}) => (
  <Card className={`project-card ${className}`} {...otherProps}>
    <CardPrimaryContent onClick={() => (window.location = demoButton.href)}>
      <CardMedia wide>
        <div className="project-card__media-image">
          <Image {...media} />
        </div>
        <Headline4 className="project-card__headline">{headline}</Headline4>
      </CardMedia>
      <Body1 className="project-card__body">{body}</Body1>
    </CardPrimaryContent>

    <ChipSet>
      {tags.map(tag => (
        <Chip label={tag} tabIndex={-1} key={tag} />
      ))}
    </ChipSet>
    <CardActions>
      <CardActionButtons>
        <Button href={demoButton.href}>{demoButton.label}</Button>
        <Button href={sourceButton.href}>{sourceButton.label}</Button>
      </CardActionButtons>
    </CardActions>
  </Card>
);

export default memo(ProjectCard);
