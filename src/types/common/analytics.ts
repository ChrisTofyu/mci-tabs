import { payloadProps } from './ajax';
export interface AdobeEvent {
  event?: string;
  event_details?: string | payloadProps;
  video?: {
    video_duration?: string | number | null;
    video_id?: string | null;
    video_name?: string | null;
    video_url?: string | null;
    video_source?: 'YouTube' | 'Vimeo' | 'AEM Hosted';
  };
  scroll?: {
    percentage?: string;
  };
  page?: {
    [key: string]: payloadProps | string | number | null | undefined | boolean;
  };
}
export interface FormAnalyticsProps extends Record<string, unknown> {
  form: string;
  type: string;
}
