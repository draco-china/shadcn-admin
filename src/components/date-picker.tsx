import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type DatePickerProps = {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  placeholder?: string;
};

export function DatePicker({
  selected,
  onSelect,
  placeholder,
}: DatePickerProps) {
  const { t } = useTranslation('components');
  const datePickerPlaceholder =
    placeholder || t('datePicker.placeholder', 'Pick a date');

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!selected}
          className="data-[empty=true]:text-muted-foreground w-[240px] justify-start text-start font-normal"
        >
          {selected ? (
            format(selected, 'MMM d, yyyy')
          ) : (
            <span>{datePickerPlaceholder}</span>
          )}
          <CalendarIcon className="ms-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          captionLayout="dropdown"
          selected={selected}
          onSelect={onSelect}
          disabled={(date: Date) =>
            date > new Date() || date < new Date('1900-01-01')
          }
        />
      </PopoverContent>
    </Popover>
  );
}
