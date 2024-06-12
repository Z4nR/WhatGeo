import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { codeData } from '../utils/docs-data';
import TableCode from '@/components/docs/TableCode';
import { swaggerSpec } from '@/utils/swagger';

export default function DocsPage() {
  return (
    <div className="py-4 px-6">
      <SwaggerUI spec={swaggerSpec} />
      <div className="divider" />
      <TableCode data={codeData} />
    </div>
  );
}
