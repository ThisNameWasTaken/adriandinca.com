import React, { memo } from 'react';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons,
} from './material/Card';
import { Headline4, Body1 } from './material/Typography';
import Button from './material/Button';
import Image from './image';
import { ChipSet, Chip } from './material/Chip';
import IconButton from './material/IconButton';

import GithubIcon from '../images/icons/github-brands.svg';
import Tooltip from './material/Tooltip';

const ProjectCard = ({
  headline,
  body,
  media,
  sourceButton,
  demoButton,
  tags,
  href,
  className = '',
  ...otherProps
}) => (
  <Card className={`project-card ${className}`} {...otherProps}>
    <CardPrimaryContent href={href}>
      <CardMedia wide>
        <div className="project-card__media-image">
          <Image {...media} />
        </div>
        <Headline4 className="project-card__headline">{headline}</Headline4>
      </CardMedia>
      <Body1 className="project-card__body">{body}</Body1>
    </CardPrimaryContent>

    <ChipSet className="project-card__chips">
      {tags.map(tag => (
        <Chip label={tag} tabIndex={-1} key={tag} />
      ))}
    </ChipSet>
    <CardActions>
      <CardActionButtons>
        <Button href={demoButton.href}>{demoButton.label}</Button>
        <Button href={href}>Read</Button>
      </CardActionButtons>
      <CardActionIcons>
        <IconButton
          id={`${href}`}
          className="mdc-icon-button--primary"
          href={sourceButton.href}
        >
          <GithubIcon />
        </IconButton>
      </CardActionIcons>
    </CardActions>

    <Tooltip htmlFor={href}>View Source</Tooltip>
  </Card>
);

export default memo(ProjectCard);
