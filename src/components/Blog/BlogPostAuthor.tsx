import * as React from 'react';
import styled from 'react-emotion';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import svLocale from 'date-fns/locale/sv';
import { Author } from 'src/components/Blog/types';
import { colors } from '@hedviginsurance/brand';

interface BlogPostAuthorProps {
  author?: Author;
  date: string; // DateString, maybe better representation aswell?
}

const PortraitContainer = styled('div')({
  width: 40,
  height: 40,
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
});

const Portrait = styled('img')({
  display: 'inline',
  margin: '0 auto',
  height: '100%',
  width: 'auto',
});

const AuthorContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 24,
  fontSize: 16,
});

const AuthorTextContainer = styled('div')({
  lineHeight: 1.3,
  marginLeft: 12,
});

const BlogPostAuthor: React.SFC<BlogPostAuthorProps> = ({ author, date }) => (
  <AuthorContainer>
    {author && (
      <PortraitContainer>
        <Portrait src={author.image} alt={`Porträtt av ${author.name}`} />
      </PortraitContainer>
    )}
    <AuthorTextContainer>
      <div>
        {format(parse(date), 'DD MMMM YYYY', {
          locale: svLocale,
        })}
      </div>
      <div>{author ? author.name : 'Anonym'}</div>
    </AuthorTextContainer>
  </AuthorContainer>
);

export { BlogPostAuthor };
