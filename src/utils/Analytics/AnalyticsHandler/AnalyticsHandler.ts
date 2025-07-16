import { payloadProps } from '@internal/types/common';

export interface TrackClickProps {
  target?: string;
  location?: string;
  name?: string;
  urlType?: 'external' | 'internal';
  type?: 'link' | 'button' | 'carousel';
  eventDetails?: string;
  contentTypeOrPosition?: string | number;
}

/**
 * Determines if the URL is external or internal based on the target string.
 * @param {string} target - The URL to be checked.
 * @returns {'external' | 'internal'} - Returns 'external' if the URL is not from the same origin,
 * otherwise returns 'internal'.
 */
const getURLType = (target: string): 'external' | 'internal' =>
  target?.includes('http') && !target.includes(window.location.origin)
    ? 'external'
    : 'internal';

export const AnalyticsHandler = () => {
  const push = (
    event: string,
    eventDetails: payloadProps | string,
    details = {}
  ) => {
    const dataLayerObj = {
      event,
      event_details: eventDetails,
      ...details,
    };
    window.adobeDataLayer ??= [];
    window.adobeDataLayer.push(dataLayerObj);
  };
  const trackClick = ({
    target = '',
    location = '',
    name = '',
    urlType,
    type = 'button',
    eventDetails = 'button click',
    contentTypeOrPosition = '',
  }: TrackClickProps) => {
    const updatedLocation = location ?? document.title;

    const clickData: payloadProps = {
      action: 'click',
      href_url: target,
      location: updatedLocation,
      name: name.trim(),
      type: type,
      url_type: urlType ?? getURLType(target),
    };

    if (type === 'button')
      clickData.content_type_or_position = contentTypeOrPosition;

    push('click', eventDetails, {
      click: clickData,
      page: { page_url: window.location.href },
    });
  };
  return { push, trackClick };
};
export default AnalyticsHandler;
