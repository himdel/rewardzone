import { RewardzonePage } from './app.po';

describe('rewardzone App', function() {
  let page: RewardzonePage;

  beforeEach(() => {
    page = new RewardzonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
