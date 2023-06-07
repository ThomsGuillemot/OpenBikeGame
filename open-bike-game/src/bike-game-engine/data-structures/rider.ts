export interface Rider {
  /**
   * Store a Guid, to be sure no rider that register to a race, event, championship have the same id
   * It's easier to manage a World Wide database with guid as identifier
   */
  guid: string;
  pseudo: string;
}
