import { utmParamsToBranchLinkOptions } from './utm-to-branch';

describe('utmParamsToBranchLinkOptions(utmParams, branchLinkOptions)', () => {
  it('handles null utm params and branch link options', () => {
    expect(utmParamsToBranchLinkOptions(null, null)).toEqual({});
  });

  it('utm params transformed to branch link options', () => {
    expect(
      utmParamsToBranchLinkOptions(
        {
          source: 'google',
          medium: 'paid-search',
          term: 'hemförsäkring',
          content: 'students-sto-v1',
          name: 'traffic-180430',
        },
        null,
      ),
    ).toEqual({
      channel: 'google',
      feature: 'paid-search',
      keywords: ['hemförsäkring'],
      tags: ['students-sto-v1'],
      campaign: 'traffic-180430',
    });
  });

  it('branch tags and keywords are converted to arrays', () => {
    expect(
      utmParamsToBranchLinkOptions(null, {
        channel: 'hedvig',
        feature: 'organic',
        tags: 'experiment-v2',
        keywords: 'travel',
      }),
    ).toEqual({
      channel: 'hedvig',
      feature: 'organic',
      tags: ['experiment-v2'],
      keywords: ['travel'],
    });
  });

  it('utm params take precedent over branch link options', () => {
    expect(
      utmParamsToBranchLinkOptions(
        {
          source: 'google',
          medium: 'paid-search',
          term: 'hemförsäkring',
          content: 'students-sto-v1',
          name: 'traffic-180430',
        },
        {
          channel: 'hedvig',
          feature: 'organic',
          tags: ['experiment-v2'],
        },
      ),
    ).toEqual({
      channel: 'google',
      feature: 'paid-search',
      keywords: ['hemförsäkring'],
      tags: ['students-sto-v1'],
      campaign: 'traffic-180430',
    });
  });
});
